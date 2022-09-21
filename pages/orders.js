import OrderRow from "components/OrderRow";
import TitleBar from "components/TitleBar";
import useMediaQuery from "hooks/useMediaQuery";
import Dashboardlayout from "layouts/DashboardLayout";
import React from "react";
import styles from "scss/pages/Orders.module.scss";

function Orders() {
  const isBellow760px = useMediaQuery("(max-width : 47.5em)");

  return (
    <Dashboardlayout pagename="Orders">
      <div className={`${styles.wrapper} dashboard-orders`}>
        <div className={isBellow760px ? "mb-25px" : "mb-45px"}>
          <TitleBar title="My Orders" />
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className="unchange-gray fs-16px weight-7" data-cell="sno">
                  SNO
                </th>
                <th className="unchange-gray fs-16px weight-7">USERNAME</th>
                <th className="unchange-gray fs-16px weight-7">EMAIL</th>
                <th className="unchange-gray fs-16px weight-7">PHONE</th>
                <th className="unchange-gray fs-16px weight-7">TELEGRAM</th>
                <th className="unchange-gray fs-16px weight-7">SERVICE</th>
                <th className="unchange-gray fs-16px weight-7">DETAILS</th>
                <th className="unchange-gray fs-16px weight-7">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <OrderRow />
              <OrderRow />
              <OrderRow />
              <OrderRow />
              <OrderRow />
              <OrderRow />
              <OrderRow />
              <OrderRow />
              <OrderRow />
              <OrderRow />
            </tbody>
          </table>
        </div>
      </div>
    </Dashboardlayout>
  );
}

export default Orders;
