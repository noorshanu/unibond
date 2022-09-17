import DashboardLayout from "layouts/DashboardLayout";
import Services from "layouts/Services";

export default function ServicesPage() {
  return (
    <div data-units="vw">
      <DashboardLayout pageName="Services">
        <Services />
      </DashboardLayout>
    </div>
  );
}
