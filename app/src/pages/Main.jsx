import { useEffect, useState } from "react";
import LocalStorage from "../utils/localStorage";
import { useHistory } from "react-router-dom";
import getAPI from "../utils/getAPI";
import SelectOptions from "../components/SelectOptions";
import Information from "../components/Information";
import Header from "../components/Header";

export default function Main() {
  const history = useHistory();

  const [apiKey, setApiKey] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeasons] = useState("");
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("");
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("a");

  useEffect(() => {
    const storedKey = LocalStorage.getItem("apiKey");
    if (!storedKey) {
      history.push("/");
    }
    const getCountries = async () => {
      await getAPI(
        "/countries",
        (data) => setCountries(data.response),
        storedKey
      );
    };
    getCountries();
    setApiKey(storedKey);
  }, []);

  useEffect(() => {
    const getLeagues = async () => {
      const mainPath = `/leagues?country=${selectedCountry}`;
      await getAPI(
        mainPath,
        (data) => {
          setSeasons(data.response[0].seasons.map(({ year }) => year));
          setLeagues(data.response);
        },
        apiKey
      );
    };
    if (selectedCountry) getLeagues();
  }, [selectedCountry]);

  useEffect(() => {
    const getTeams = async () => {
      await getAPI(
        `/teams?league=${selectedLeague}&season=${selectedSeason}`,
        (data) => {
          setTeams(data.response);
        },
        apiKey
      );
    };
    if (selectedLeague) getTeams();
  }, [selectedLeague]);

  return (
    <div className="MainDiv">
      <Header />
      <form className="form_class">
        <SelectOptions
          array={countries.map((c) => ({ name: c.name, valueToSave: c.name }))}
          handleChange={setSelectedCountry}
          fieldName="country"
          text="Países:"
        />

        <SelectOptions
          array={seasons.map((s) => ({ name: s, valueToSave: s }))}
          handleChange={setSelectedSeasons}
          fieldName="seasons"
          text="Temporadas:"
        />

        <SelectOptions
          array={leagues.map(({ league }) => ({
            name: league.name,
            valueToSave: league.id,
          }))}
          handleChange={setSelectedLeague}
          fieldName="leagues"
          text="Ligas:"
        />

        <SelectOptions
          array={teams.map(({ team }) => ({
            name: team.name,
            valueToSave: team.id,
          }))}
          handleChange={setSelectedTeam}
          fieldName="team"
          text="Times:"
        />
      </form>

      {selectedTeam && (
        <Information
          team={selectedTeam}
          league={selectedLeague}
          season={selectedSeason}
          apiKey={apiKey}
        />
      )}
    </div>
  );
}
