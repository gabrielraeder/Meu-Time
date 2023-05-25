import { useEffect, useState } from "react";
import getAPI from "../utils/getAPI";
import LocalStorage from "../utils/localStorage";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [apiKey, setApiKey] = useState("");
  const [loginError, setLoginError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (LocalStorage.getItem("apiKey")) {
      history.push("/main");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getAPI("status", handleFetchResult, apiKey);
  };

  const handleFetchResult = (apiResult) => {
    if (apiResult.errors.token) {
      setLoginError(true);
      return console.log(apiResult.errors.token);
    }
    setLoginError(false);
    LocalStorage.setLocalStorage("apiReturn", apiResult);
    LocalStorage.setLocalStorage("apiKey", apiKey);
    history.push("/main");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={apiKey}
        onChange={({ target: { value } }) => setApiKey(value)}
      />
      <button type="submit" disabled={apiKey.length !== 32}>
        Submit
      </button>
      {loginError && <p>API KEY inválida</p>}
    </form>
  );
}
