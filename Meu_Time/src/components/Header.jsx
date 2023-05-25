import { useEffect, useState } from "react";
import LocalStorage from "../utils/localStorage";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  const [user, setUser] = useState("");

  useEffect(() => {
    const {
      response: { account },
    } = LocalStorage.getItem("apiReturn");
    setUser(`${account.firstname} ${account.lastname}`);
  }, []);

  const logout = () => {
    localStorage.removeItem("apiReturn");
    localStorage.removeItem("apiKey");
    history.push("/");
  };

  return (
    <div>
      <h1>Football Teams</h1>
      <h4>{user}</h4>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
