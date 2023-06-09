import { useEffect, useState } from 'react';
import getAPI from '../utils/getAPI';
import LocalStorage from '../utils/localStorage';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [apiKey, setApiKey] = useState('');
  const [loginError, setLoginError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (LocalStorage.getItem('apiKey')) {
      history.push('/main');
    }
  }, []);

  useEffect(() => {
    setLoginError(false);
  }, [apiKey]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getAPI('status', handleFetchResult, apiKey);
  };

  const handleFetchResult = (apiResult) => {
    if (apiResult.errors.token) {
      setLoginError(true);
      return console.log(apiResult.errors.token);
    }
    setLoginError(false);
    LocalStorage.setLocalStorage('apiReturn', apiResult);
    LocalStorage.setLocalStorage('apiKey', apiKey);
    history.push('/main');
  };

  return (
    <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
      <h1>Football Teams</h1>
      <div className="login_div">
        <input type="text" value={apiKey} onChange={({ target: { value } }) => setApiKey(value)} />
        <button type="submit">Submit</button>
        <a href="https://dashboard.api-football.com/register" target="_blank" rel="noreferrer">
          Register
        </a>
      </div>
      {loginError && <p>API KEY inválida</p>}
    </form>
  );
}
