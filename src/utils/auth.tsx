import { useEffect, useState } from "react";
import axios from "./axios";
import { Navigate } from "react-router-dom";
import { LocalStorage } from "./localstorage";

export default function AuthComponent() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `/api/auth/google/callback${location.search}`,
          {
            headers: {
              Authorization: ``,
            },
          }
        );
        LocalStorage.setItem("token", res.data.jwt);
        setDone(true);
      } catch (err) {
        console.error(err);
        setDone(false);
      }
    })();
  }, []);

  return <>{done ? <Navigate to={"/"} /> : <></>}</>;
}
