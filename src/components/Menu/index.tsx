import Dashboard from "./DashboardNavBar";
import Profile from "./ProfileNavBar";
import Tables from "./TablesNavBar";

export default function Menu() {
  return (
    <div>
      <h3 className="mb-4 ml-4 text-sm font-medium text-gray-500 text-bodydark2">
        MENU
      </h3>

      <ul className="mb-6 flex flex-col gap-1">
        <Dashboard />
        <Tables />
        <Profile />
      </ul>
    </div>
  );
}
