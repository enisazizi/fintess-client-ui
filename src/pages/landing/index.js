import React, { useState } from "react";
import { Login, Register } from "../../authentication";
import { Nav } from "react-bootstrap";

const Landing = (props) => {
  const [selected, setSelected] = useState("login");
  return (
    <div
      className="container-fluid p-5 d-flex justify-content-center "
      style={{
        height: "100vh",
        backgroundImage: `url('https://res.cloudinary.com/dtopnwa0t/image/upload/v1619486739/Fitness/xj9wxtu6zezxex1yjkrb.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="container m-5">
        <div className="row justify-content-center ">
          <div className="col-12 d-flex justify-content-center">
            <Nav
              variant="pills"
              onSelect={(selected) => {
                setSelected(selected);
              }}
              defaultActiveKey="/"
            >
            
           
            </Nav>
          </div>
        </div>
        <div className="row h-100 w-100 justify-content-center mt-5">
          <div className="col-5">
            {selected === "login" ? (
              <Register {...props} />
            ) : (
              <Login {...props} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
