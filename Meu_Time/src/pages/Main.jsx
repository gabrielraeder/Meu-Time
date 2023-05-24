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
    };
    getCountries();
  }, [apiKey]);

  const handleCountryChange = async (value) => {
    setSelectedCountry(value);
    const mainPath = `/leagues?country=${selectedCountry}`;
    await getAPI(mainPath, (data) => setLeagues(data.response), apiKey);
    await getAPI(`/leagues/seasons`, (data) => setSeasons(data.response), apiKey);
  };

  const handleSeasonChange = async (value) => {
    setSelectedSeasons(value);
  };

  const handleLeagueChange = async (value) => {
    setSelectedLeague(value);
    await getAPI(`/teams?league=${selectedLeague}&season=${selectedSeason}`, (data) => setTeams(data.response), apiKey);
  };

  const handleTeamChange = async (value) => {
    setSelectedTeam(value);
  };

  // useEffect(() => {
  //   console.log(selectedTeam);
  // }, [teams]);

  return (
    <>
      <form>
        <SelectOptions
          array={ countries.map((c) => ({ name: c.name, valueToSave: c.name })) }
          handleChange={handleCountryChange}
          fieldName="country"
          text="Países:"
        />
        {/* <label htmlFor="countries">
          Países: 
          <select
            name="country"
            id="countries"
            onChange={ ({ target: { value } }) => handleCountryChange(value) }
          >
            {
              countries.map(({ name }) => (
                <option key={ name } value={ name }>{ name }</option>
              ))
            }
          </select>
        </label> */}
        
        <SelectOptions
          array={ seasons.map((s) => ({ name: s, valueToSave: s })) }
          handleChange={handleSeasonChange}
          fieldName="seasons"
          text="Temporadas:"
        />
        {/* <label htmlFor="seasons">
          Temporadas: 
          <select
            name="season"
            id="seasons"
            onChange={ ({ target: { value } }) => handleSeasonChange(value) }
          >
            {
              seasons?.map((season) => (
                <option key={ season } value={ season }>{ season }</option>
              ))
            }
          </select>
        </label> */}

        <SelectOptions
          array={ leagues.map((l) => ({ name: l.name, valueToSave: l.id })) }
          handleChange={handleLeagueChange}
          fieldName="leagues"
          text="Ligas:"
        />
        {/* <label htmlFor="leagues">
          Ligas: 
          <select
            name="league"
            id="leagues"
            onChange={ ({ target: { value } }) => handleLeagueChange(value) }
          >
            {
              leagues?.map(({ league }) => (
                <option key={ league.id } value={ league.id }>{ league.name }</option>
              ))
            }
          </select>
        </label> */}

        <SelectOptions
          array={ teams.map(({ team }) => ({ name: team.name, valueToSave: team.id })) }
          handleChange={handleTeamChange}
          fieldName="team"
          text="Times:"
        />
        {/* <label htmlFor="teams">
          Times: 
          <select
            name="teams"
            id="team"
            onChange={ ({ target: { value } }) => handleTeamChange(value) }
          >
            {
              teams?.map(({ team }) => (
                <option key={ team.id } value={ team.id }>{ team.name }</option>
              ))
            }
          </select>
        </label> */}
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
