import React from "react";
import { useRecoilState } from "recoil";

import { Nav, Button, ListGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import data from "../data"
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const history = useHistory()
  const [client, setClient] = useRecoilState(data.atoms.Client);
  function handleClick(param) {
    console.log("hehe")
    history.push(`/${param}`)
  }
  const checkOutActivity= async ()=>{
    console.log("hehe")
    const res = await data.api.activity.checkOut()
    console.log(res)
    if(res._id){
      setClient({ auth: false});

      history.push(`/`)
    }
  }
  return (
    <div style={{ height: "100vh" }} className="container-fluid sticky-top" style={{backgroundColor:'black'}}>
      <div className="row row-cols-1 h-100">
        <div className="col">
          <img
            className="img-fluid rounded-circle mt-5  "
            src="https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin-300x300.jpg"
            alt=""
          />
          <ListGroup className="mt-5 text-center px-3">
            <ListGroup.Item className=" h4 rounded " onClick={()=>handleClick("activity")} style={{ height: "50px" }}>
              Activity
            </ListGroup.Item>
            <ListGroup.Item className=" h4 rounded "  onClick={()=>handleClick("cart")} style={{ height: "50px" }}>
              Cart
            </ListGroup.Item>
            <ListGroup.Item className=" h4 rounded "  onClick={()=>handleClick("products")} style={{ height: "50px" }}>
              Products
            </ListGroup.Item>
           
          </ListGroup>
        </div>
        <div className="col mt-auto">
          <Button  onClick={()=>checkOutActivity()} variant="secondary w-100 mb-3">Log out</Button>
        </div>
      </div>
    </div>
  );
};
