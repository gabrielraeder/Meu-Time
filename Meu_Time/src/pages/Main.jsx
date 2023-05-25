import { useEffect, useState } from "react";
import LocalStorage  from "../utils/localStorage";
import { useHistory } from 'react-router-dom';
import getAPI from "../utils/getAPI";
import SelectOptions from "../components/SelectOptions";
import Information from "../components/Information";

export default function Main() {
  const history = useHistory();
  const [apiKey, setApiKey] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('Brazil');
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeasons] = useState('2021');
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState('');
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');



  useEffect(() => {
    const localStorage = LocalStorage.getItem('apiKey');
    if (!localStorage) {
      history.push('/');
    }
    setApiKey(localStorage)
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      await getAPI('/countries', (data) => setCountries(data.response), apiKey);
      await getAPI(`/leagues/seasons`, (data) => setSeasons(data.response), apiKey);
    };
    getCountries();
  }, [apiKey]);
  
  useEffect(() => {
    const getLeaguesAndSeasons = async () => {
      const mainPath = `/leagues?country=${selectedCountry}`;
    await getAPI(mainPath, (data) => setLeagues(data.response), apiKey);
    }
    getLeaguesAndSeasons();
  }, [selectedCountry])
  
  useEffect(() => {
    const getTeams = async () => {
      await getAPI(`/teams?league=${selectedLeague}&season=${selectedSeason}`, (data) => setTeams(data.response), apiKey);
    };
    getTeams()
  }, [selectedLeague])
  


  return (
    <>
      <form>
        <SelectOptions
          array={ countries.map((c) => ({ name: c.name, valueToSave: c.name })) }
          handleChange={setSelectedCountry}
          fieldName="country"
          text="Países:"
        />
        
        <SelectOptions
          array={ seasons.map((s) => ({ name: s, valueToSave: s })) }
          handleChange={setSelectedSeasons}
          fieldName="seasons"
          text="Temporadas:"
        />

        <SelectOptions
          array={ leagues.map(({ league }) => ({ name: league.name, valueToSave: league.id })) }
          handleChange={setSelectedLeague}
          fieldName="leagues"
          text="Ligas:"
        />

        <SelectOptions
          array={ teams.map(({ team }) => ({ name: team.name, valueToSave: team.id })) }
          handleChange={setSelectedTeam}
          fieldName="team"
          text="Times:"
        />
      </form>
      
      { 
        selectedTeam && (
          <Information
            team={ selectedTeam }
            league={ selectedLeague }
            season={ selectedSeason }
            apiKey={ apiKey }
          />)
      }
    </>
  )
}
