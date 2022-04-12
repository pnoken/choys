import withAuth from "../components/PrivateRoute";
import Admin from "../components/Layout/Admin";
import dynamic from "next/dynamic";
import Preloader from "../components/preloader";

const StravaCard = dynamic(() => import("../components/Cards/StravaStats"), {
  loading: () => <Preloader />,
});

export default function Analytics() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-1">
          <StravaCard />
        </div>
        <div className="w-full lg:w-4/12 px-1"></div>
      </div>
    </>
  );
}

Analytics.layout = withAuth(Admin);
