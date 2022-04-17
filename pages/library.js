import withAuth from "../components/PrivateRoute";
import User from "../components/Layout/User";
import CardLibrary from "../components/WellbeingLibrary/CardLibrary";

export default function Library() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-1">
          <CardLibrary />
        </div>
      </div>
    </>
  );
}

Library.layout = withAuth(User);
