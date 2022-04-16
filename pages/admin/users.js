import Admin from "../../components/Layout/Admin";
import withAuth from "../../components/PrivateRoute.js";
import dynamic from "next/dynamic";
import Preloader from "../../components/preloader";

export default function Users() {
  const UserTable = dynamic(() => import("../../components/Users/UserTable"), {
    loading: () => (
      <div>
        <Preloader />
      </div>
    ),
  });
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-1">
          <UserTable color="light" />
        </div>
        <div className="w-full mb-12 px-1">
          {/* <CardTable color="dark" /> */}
        </div>
      </div>
    </>
  );
}

Users.layout = withAuth(Admin);
