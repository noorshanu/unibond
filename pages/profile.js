import Dashboardlayout from "layouts/DashboardLayout";
import ProfilePage from "layouts/profile/profilePage";
import React from "react";

function Profile() {
  return (
    <div>
      <Dashboardlayout data-layout="dashboard" pagename="Profile">
        <ProfilePage />
      </Dashboardlayout>
    </div>
  );
}

export default Profile;
