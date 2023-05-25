import { useState } from "react";
import getAPI from "../utils/getAPI";
import LocalStorage from "../utils/localStorage";
import { useHistory } from "react-router-dom";
// 854a097a84bf6ba19ab5996a760c58f3
// a4e214a8a2e0bc85a3db6dfd5aae1372
export default function Login() {
  const [apiKey, setApiKey] = useState("");
  const [loginError, setLoginError] = useState(false);
  const history = useHistory();

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
      <button type="submit">Submit</button>
      {loginError && <p>API KEY inválida</p>}
    </form>
  );
}
