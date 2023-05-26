import { useEffect, useState } from 'react';
import LocalStorage from '../utils/localStorage';
import { useHistory } from 'react-router-dom';
import getAPI from '../utils/getAPI';
import SelectOptions from '../components/SelectOptions';
import Information from '../components/Information';
import Header from '../components/Header';
import Loading from '../components/Loading';

export default function Main() {
  const history = useHistory();

  const [loading, setLoading] = useState(true);

  const [apiKey, setApiKey] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeasons] = useState('');
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState('');
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    const storedKey = LocalStorage.getItem('apiKey');
    if (!storedKey) {
      history.push('/');
    }
    const getCountries = async () => {
      await getAPI(
        '/countries',
        ({ response }) => {
          setCountries(response);
          if (response.length > 0) setLoading(false);
        },
        storedKey
      );
    };
    getCountries();
    setApiKey(storedKey);
  }, []);

  useEffect(() => {
    const getLeagues = async () => {
      setLoading(true);
      const mainPath = `/leagues?country=${selectedCountry}`;
      await getAPI(
        mainPath,
        ({ response }) => {
          setSeasons(response[0].seasons.map(({ year }) => year));
          setLeagues(response);
          if (response.length > 0) setLoading(false);
        },
        apiKey
      );
    };
    if (selectedCountry) getLeagues();
  }, [selectedCountry]);

  useEffect(() => {
    const getTeams = async () => {
      setLoading(true);
      await getAPI(
        `/teams?league=${selectedLeague}&season=${selectedSeason}`,
        ({ response }) => {
          setTeams(response);
          if (response.length > 0) setLoading(false);
        },
        apiKey
      );
    };
    if (selectedLeague) getTeams();
  }, [selectedLeague]);

  useEffect(() => {
    setRestart(true);
    setSelectedTeam('');
    setTeams([]);
  }, [selectedCountry, selectedLeague, selectedSeason]);

  const cancelRequest = () => {
    setLoading(false);
  };

  return (
    <main>
      <div className="MainDiv">
        <Header />
        <form className="form_class">
          <SelectOptions
            array={countries.map((c) => ({ name: c.name, valueToSave: c.name }))}
            handleChange={setSelectedCountry}
            fieldName="country"
            text="COUNTRIES 🡺 "
          />

          <SelectOptions
            array={seasons.map((s) => ({ name: s, valueToSave: s }))}
            handleChange={setSelectedSeasons}
            fieldName="seasons"
            text="SEASONS 🡺 "
          />

          <SelectOptions
            array={leagues.map(({ league }) => ({
              name: league.name,
              valueToSave: league.id
            }))}
            handleChange={setSelectedLeague}
            fieldName="leagues"
            text="LEAGUES 🡺 "
          />

          <SelectOptions
            array={teams.map(({ team }) => ({
              name: team.name,
              valueToSave: team.id
            }))}
            handleChange={setSelectedTeam}
            fieldName="team"
            text="TEAMS 🡺 "
          />
        </form>
        {selectedTeam && (
          <Information
            restart={restart}
            team={selectedTeam}
            league={selectedLeague}
            season={selectedSeason}
            apiKey={apiKey}
            loading={loading}
            setLoading={setLoading}
          />
        )}
      </div>
      {loading && <Loading cancelRequest={cancelRequest} />}
    </main>
  );
}
