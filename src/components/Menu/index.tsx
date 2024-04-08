import Calendar from "./Calendar";
import Dashboard from "./Dashboard";
import Forms from "./Forms";
import Pages from "./Pages";
import Profile from "./Profile";
import Tables from "./Tables";
import Task from "./Task";

export default function Menu() {
  return (
    <div>
      <h3 className="mb-4 ml-4 text-sm font-medium text-gray-500 text-bodydark2">
        MENU
      </h3>

      <ul className="mb-6 flex flex-col gap-1">
        <Dashboard />
        <Calendar />
        <Profile />
        <Task />
        <Forms />
        <Tables />
        <Pages />
      </ul>
    </div>
  );
}
