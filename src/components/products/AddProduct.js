import React, { useState,useEffect } from "react";
import { Form, Row, Col, Button,Spinner,Toast } from "react-bootstrap"

import  {api}  from "../../data/api";
import data from "../../data"

function AddProduct() {
 
useEffect(async() => {
 const res = await data.api.cart.getProducts()
 console.log(res)
}, []);
 
  return (
    <>
    
  
    </>
  );
}
export default AddProduct;
