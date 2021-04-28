import React from "react";

export default () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-2">
          <div className="col">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Payment Id</th>
                  <th scope="col">Date</th>
                  <th scope="col">Client</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>113221234</td>
                  <td>27/05/2021</td>
                  <td>Enith_A</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>113212324</td>
                  <td>27/05/2021</td>
                  <td>@John_T</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td >113212324</td>
                  <td>26/05/2021</td>
                  <td>@Donald_T</td>
                </tr>
                  <tr>
                  <th scope="row">4</th>
                  <td >1132567324</td>
                  <td>26/05/2021</td>
                  <td>@Donald_T</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td >118212321</td>
                  <td>26/05/2021</td>
                  <td>@Donald_T</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td >123212329</td>
                  <td>26/05/2021</td>
                  <td>@Donald_T</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
