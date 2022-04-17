import React, { useEffect, useState } from "react";
import withAuth from "../components/PrivateRoute";
import User from "../components/Layout/User";
import CardSettings from "../components/Cards/CardSettings";
import CardAPI from "../components/Cards/CardAPI";
import { useRouter } from "next/router";
import axios from "axios";

export default function Settings() {
  const router = useRouter();
  const { code } = router.query;
  const clientID = 80223;
  const clientSecret = "bf4429450ccce439035180d52b46801d0ef64147";
  const redirectURI = window.location.href;
  const [authenticated, setAuthenticated] = useState(
    localStorage.authenticated || false
  );

  var config = {
    method: "post",
    url: `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`,
  };

  useEffect(() => {
    async function fetchData() {
      await axios(config)
        .then(function (response) {
          console.log(response.data);
          localStorage.setItem("strava_access", response.data.access_token);
          localStorage.setItem("strava_refresh", response.data.refresh_token);
          localStorage.setItem("authenticated", true);
          setAuthenticated(true);
          window.location.href = "/analytics";
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-1">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-1">
          <CardAPI
            redirectURI={redirectURI}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </div>
      </div>
    </>
  );
}

Settings.layout = withAuth(User);
