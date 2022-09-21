import React from "react";
import StatusSelector from "./StatusSelector";

function OrderRow() {
  return (
    <tr>
      <td className="unchange-gray fs-16px weight-5" data-cell="sno">
        1
      </td>
      <td className="unchange-gray fs-16px weight-5">letscheck</td>
      <td className="unchange-gray fs-16px weight-5">letscheck@bmail.com</td>
      <td className="unchange-gray fs-16px weight-5">+91799064452</td>
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
  );
}

export default OrderRow;
