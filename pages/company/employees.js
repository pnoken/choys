import Employer from "../../components/Layout/Employer";
import withAuth from "../../components/PrivateRoute.js";
import dynamic from "next/dynamic";
import Preloader from "../../components/preloader";

export default function Employees() {
  const EmployeeTable = dynamic(
    () => import("../../components/Users/EmployeeTable"),
    {
      loading: () => (
        <div>
          <Preloader />
        </div>
      ),
    }
  );
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 xl:mb-0 px-1">
          <EmployeeTable color="light" />
        </div>
        <div className="w-full mb-12 px-1"></div>
      </div>
    </>
  );
}

Employees.layout = withAuth(Employer);
