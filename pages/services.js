import DashboardLayout from "layouts/DashboardLayout";
import Services from "layouts/Services";

export default function ServicesPage() {
  return (
    <div data-layout="dashboard">
      <DashboardLayout pagename="Services">
        <Services />
      </DashboardLayout>
    </div>
  );
}
