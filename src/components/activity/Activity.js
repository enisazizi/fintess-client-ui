import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
// import Chart from "chart.js"
import { Bar, Line, Pie } from "react-chartjs-2";
import SidebarHOC from "../../Layout";

function Activity() {
  const [chartData, setChartData] = useState({
    labels: ["Active-Clients"],
    datasets: [
      {
        label: "Active clients inside gym",
        data: [1],
        backgroundColor: ["rgba(233, 212, 96, 1)"],
      },
    ],
  });
  const [chartData2, setChartData2] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May,",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Active Clients",
        data: [
          1200,
          1700,
          2000,
          2100,
          1900,
          2000,
          1500,
          3000,
          2300,
          2500,
          2000,
          3000,
        ],
      },
    ],
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Line
              data={chartData2}
              width=""
              height="300px"
              options={{ maintainAspectRatio: false }}
            />
          </div>
          <div className="col-4">
            <Pie
              data={chartData}
              width="805px"
              height="249px"
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>

        <div className="row ">
          <div className="col">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "20px" }}>1</td>
                  <td>Endrit</td>
                  <td>Azizi</td>
                  <td>Diti</td>
                </tr>
                <tr>
                  <td style={{ width: "20px" }}>2</td>
                  <td>Enis</td>
                  <td>Azizi</td>
                  <td>Enith</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ermal</td>
                  <td>Asllani</td>
                  <td>Cipa</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Leon </td>
                  <td>Abimi</td>
                  <td>Cincra</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarHOC(Activity);
