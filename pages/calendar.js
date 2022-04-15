import withAuth from "../components/PrivateRoute";
import Admin from "../components/Layout/Admin";
import { CalendarCard } from "../components/Calendar/Calendar";

export default function Calendar() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-2">
          <CalendarCard />
        </div>
      </div>
    </>
  );
}

Calendar.layout = withAuth(Admin);
