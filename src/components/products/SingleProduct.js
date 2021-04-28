import React, { useEffect, useState } from "react"
import {api} from "../../data/api"
import data from "../../data"
import { Card, Row,Col ,Button,Modal, Form} from 'react-bootstrap';
import "./index.css"
import { useHistory } from "react-router-dom";
function SingleProduct(){
  const history = useHistory()
  
 const [productsData,setProductsData] = useState()
 const [refresh,setRefresh] = useState(false)


  useEffect( async () => {
    const response = await api.getAllProducts()
    
    setProductsData(response)
    console.log("Hello",response)
    console.log("Hello",productsData)
  }, [refresh])
const addToCart = async(id)=>{
  const res = await data.api.cart.addProduct(id)
  if(res.status ===200){
   console.log("hehhehehe")
  }
}

    return(
      <>
   

        <Row className="ml-5 mt-5">
            { productsData && productsData.length > 0 ?(productsData.map((element)=>{
              return(
                <Col xs={3} className="mb-3"> 
                  <div className="cards-body">
      <div className="card">
          <div className="imgBx">
              <img src={element.image} />

          </div>
          <div className="contentBx">
              <h3>{element.description}</h3>
              <h2 className="price"> {element.price} <small>Euro</small></h2>
              {/* <button className="buy">Add to Cart</button> */}
              <Button variant="outline-primary" onClick={()=>addToCart(element._id)} className="buy">Add to Cart</Button>
          </div>
      </div>
  </div>
  
        </Col>
              )
       
                
              
            }))
:
(<div></div>)} 
</Row>
        </>  
    )
}

export default SingleProduct