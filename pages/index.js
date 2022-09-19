import DashboardLayout from "layouts/DashboardLayout";
import Dashboard from "layouts/Dashboard";

export default function Home() {
  return (
    <div data-layout="dashboard">
      <DashboardLayout pagename="Dashboard">
        <Dashboard />
      </DashboardLayout>
    </div>
  );
}
