import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
// import Chart from "chart.js"
import { Bar, Line, Pie } from "react-chartjs-2";
import SidebarHOC from "../../Layout";

function Payments() {
  const [chartData2, setChartData2] = useState({
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Weekly Payments Flow",
        data: [120, 170, 200, 210, 190, 200, 150],
      },
    ],
  });
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-6">
            <Line
              data={chartData2}
              width="805px"
              height="249px"
              options={{ maintainAspectRatio: false }}
            />
          </div>
          <div className="col col-6">
          <Table striped bordered hover variant="dark p-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Paymet id</th>
                <th>Client </th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: "20px" }}>1</td>
                <td>11123312</td>
                <td>Enis</td>
                <td>40</td>
              </tr>
              <tr>
                <td style={{ width: "20px" }}>2</td>
                <td>11123312</td>
                <td>Ermal</td>
                <td>32</td>
              </tr>
              <tr>
                <td>3</td>
                <td>11123312</td>
                <td>Leon</td>
                <td>30</td>
              </tr>
              <tr>
                <td>4</td>
                <td>11123312 </td>
                <td>Jon</td>
                <td>20</td>
              </tr>
            </tbody>
          </Table>
        </div>
        </div>
        <div className="col-12">
          <h1 className="text-center mt-5">Payments</h1>
          <Table striped bordered hover variant="dark p-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Paymet id</th>
                <th>Client </th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: "20px" }}>1</td>
                <td>11123312</td>
                <td>Enis</td>
                <td>40</td>
              </tr>
              <tr>
                <td style={{ width: "20px" }}>2</td>
                <td>11123312</td>
                <td>Ermal</td>
                <td>32</td>
              </tr>
              <tr>
                <td>3</td>
                <td>11123312</td>
                <td>Leon</td>
                <td>30</td>
              </tr>
              <tr>
                <td>4</td>
                <td>11123312 </td>
                <td>Jon</td>
                <td>20</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default SidebarHOC(Payments);
