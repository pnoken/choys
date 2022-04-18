import Admin from "../../components/Layout/Admin";
import withAuth from "../../components/PrivateRoute.js";
import dynamic from "next/dynamic";
import Preloader from "../../components/preloader";

export default function AdminUsers() {
  const UserTable = dynamic(() => import("../../components/Users/UserTable"), {
    loading: () => (
      <div>
        <Preloader />
      </div>
    ),
  });
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 xl:mb-0 px-1">
          <UserTable color="light" />
        </div>
        <div className="w-full mb-12 px-1"></div>
      </div>
    </>
  );
}

AdminUsers.layout = withAuth(Admin);
