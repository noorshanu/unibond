import CompanyProgressCard from "components/CompanyProgressCard";
import Sidebar from "components/Sidebar";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "scss/layout/DashboardLayout.module.scss";
import Navbar from "./Navbar";

function Dashboardlayout(props) {
  const { children, showSidebar = true, pagename } = props;
  const isBellow1024px = useMediaQuery("(max-width : 64em)");

  return (
    <div
      {...props}
      className={`${styles.dashboard} ${showSidebar ? styles.showSidebar : ""}`}
    >
      <div className={styles.left}>
        <header>
          <Navbar pagename={pagename} />
        </header>

        <main>{children}</main>
      </div>

      {showSidebar ? (
        !isBellow1024px ? (
          <div className={`${styles.sidebar} dashboard-sidebar`}>
            <Sidebar />
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboardlayout;
