import React, { useState,useEffect } from "react"
import { Card, Row,Col ,Button,Nav, Container} from 'react-bootstrap';
import SidebarHOC from "../../Layout"
import AddProduct from "./AddProduct";
import SingleProduct from "./SingleProduct";

function Products(props){

  const [selected, setSelected] = useState("products");
 

    return(
        <>
  
         
        <div className="row justify-content-center ">
          <div className="col-12 d-flex justify-content-center ml-5">
          
            
           <h2>Products</h2>
           
           
          </div>
        </div>
        {selected === "products" ? (
         
           
         
           <SingleProduct {...props} />
        
            ) : (
              <AddProduct {...props} />
            )}
       
    
        </>
    )
}

export default SidebarHOC(Products)