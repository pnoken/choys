import withAuth from "../components/PrivateRoute";
import Admin from "../components/Layout/Admin";

export default function Play() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-1">{/* <CardAthleteData /> */}</div>
        <div className="w-full lg:w-4/12 px-1">
          {/* <CardAPI redirectURI={redirectURI} authenticated={authenticated} /> */}
        </div>
      </div>
    </>
  );
}

Play.layout = withAuth(Admin);
