import React from "react";
import styles from "scss/pages/profile.module.scss";
import Dashboardlayout from "layouts/DashboardLayout";
import ProfileAccordion from "components/ProfileAccordion";
import AccountSettingForm from "components/AccountSettingForm";
import ChangePassword from "components/ChangePassword";
import ProfilePicture from "components/ProfilePicture";
import SocialProfile from "components/SocialProfile";
import TitleBar from "components/TitleBar";
import useMediaQuery from "hooks/useMediaQuery";

function Profile() {
  const isBellow760px = useMediaQuery("(max-width : 47.5em)");

  return (
    <Dashboardlayout pagename="Profile">
      <div className={`${styles.wrapper} dashboard-profile`}>
        <header className={isBellow760px ? "mb-25px" : "mb-45px"}>
          <TitleBar title="Account Settings" />
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
