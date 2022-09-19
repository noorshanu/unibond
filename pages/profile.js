import React from "react";
import styles from "scss/pages/profile.module.scss";
import Dashboardlayout from "layouts/DashboardLayout";
import ProfileAccordion from "components/ProfileAccordion";
import AccountSettingForm from "components/AccountSettingForm";

function Profile() {
  return (
    <Dashboardlayout pagename="Profile">
      <div className={styles.wrapper}>
        <header className="mb-45px">
          <h1 className="black fs-36px weight-6">Account Settings</h1>
        </header>
        <main>
          <ProfileAccordion buttonTitle="Account Settings">
            <AccountSettingForm />
          </ProfileAccordion>
        </main>
      </div>
    </Dashboardlayout>
  );
}

export default Profile;
