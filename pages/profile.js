import React from "react";
import styles from "scss/pages/profile.module.scss";
import Dashboardlayout from "layouts/DashboardLayout";
import ProfileAccordion from "components/ProfileAccordion";
import AccountSettingForm from "components/AccountSettingForm";
import ChangePassword from "components/ChangePassword";
import ProfilePicture from "components/ProfilePicture";
import SocialProfile from "components/SocialProfile";

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
          <ProfileAccordion buttonTitle="Change Password">
            <ChangePassword />
          </ProfileAccordion>
          <ProfileAccordion buttonTitle="Profile picture">
            <ProfilePicture />
          </ProfileAccordion>
          <ProfileAccordion buttonTitle="Social Profile" expand={true}>
            <SocialProfile />
          </ProfileAccordion>
        </main>
      </div>
    </Dashboardlayout>
  );
}

export default Profile;
