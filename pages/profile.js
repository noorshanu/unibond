import Dashboardlayout from "layouts/DashboardLayout";
import ProfilePage from "layouts/profile/profilePage";
import React from "react";

function Profile() {
  return (
    <div>
      <Dashboardlayout data-units="vw" pageName="Profile">
        <ProfilePage />
      </Dashboardlayout>
    </div>
  );
}

export default Profile;
