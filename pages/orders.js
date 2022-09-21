import TitleBar from "components/TitleBar";
import useMediaQuery from "hooks/useMediaQuery";
import Dashboardlayout from "layouts/DashboardLayout";
import React from "react";
import styles from "scss/pages/Orders.module.scss";

const StatusSelector = ({ options }) => {
  return (
    <select id="lang" className={`${styles.statusSelector} fs-16px weight-5`}>
      {options.map((item, index) => {
        return (
          <option key={index} value={item.title} className="fs-16px weight-5">
            {item.title}
          </option>
        );
      })}
    </select>
  );
};

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
              <tr>
                <td className="unchange-gray fs-16px weight-5" data-cell="sno">
                  1
                </td>
                <td className="unchange-gray fs-16px weight-5">letscheck</td>
                <td className="unchange-gray fs-16px weight-5">
                  letscheck@bmail.com
                </td>
                <td className="unchange-gray fs-16px weight-5">
                  +9179906445222384729384798
                </td>
                <td className="unchange-gray fs-16px weight-5">Robo</td>
                <td className="unchange-gray fs-16px weight-5">UI/UX</td>
                <td className="unchange-gray fs-16px weight-5">Web UI</td>
                <td>
                  <StatusSelector
                    options={[
                      { title: "Pending" },
                      { title: "Approved" },
                      { title: "Completed" },
                    ]}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Dashboardlayout>
  );
}

export default Orders;
