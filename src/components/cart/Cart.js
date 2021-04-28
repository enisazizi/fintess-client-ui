import React, { useState,useEffect } from "react";
import { Form, Row, Col, Button,Spinner,Toast } from "react-bootstrap"
import SidebarHOC from "../../Layout"
import  {api}  from "../../data/api";
import data from "../../data"
import {AiTwotoneDelete} from 'react-icons/ai'
import { useHistory } from "react-router-dom";
function Cart() {
  const history = useHistory()
  const [cartData,setCartData] = useState([])
  const [refresh,setRefresh]= useState(false)
  const [total,setTotal] = useState(0)
 
useEffect(async() => {
 const res = await data.api.cart.getProducts()
  if(res){
const response = await data.api.cart.getTotal()
console.log(response.total)
 setTotal(response.total)
    setCartData(res[0].products)
    console.log(cartData)
   
  }
}, [refresh]);

const deleteFromCart = async(id)=>{
  const res = await data.api.cart.removeProduct(id)
  console.log(res)
  if(res){
    setRefresh(!refresh)
  }
}
 const orderNow = async()=>{
   
   const res = await data.api.cart.orderProd()
   setRefresh(!refresh)
   history.push("/products")
 }
  return (
    <>
    <div className="row justify-content-center" style={{color:'#fff',}}>

    <h2 className="justify-content-center">SHOPPING CART</h2>
    </div>
    <div className='row' style={{borderRadius:'20px',height:'100vh'}}>
      {cartData.length>0 ? 
      
      (
        cartData.map((elem,index)=>{
          return(
            <>
            {index===0 ? 
            (
              <>
               <div className="col col-8 ml-2" style={{backgroundColor:'#f0f0f0',borderRadius:'10px 10px 0 0'}}>
            <div className="row my-3" >
          <div className="col col-5" >
          <img style={{width:'250px',height:'350px',borderRadius:'20px'}} src={elem.image} />
          </div>
          <div className="col col-5" >
          <h3 style={{ fontWeight: '500',fontSize:'24px',textTransform:'uppercase'}}>- Protein</h3>
          <p style={{ fontWeight: '450',fontSize:'18px',textTransform:'uppercase'}}>- Glutamine </p>
          <p style={{ fontWeight: '450',fontSize:'18px',textTransform:'uppercase'}}>- Casamorati </p>
          <p style={{ fontWeight: '450',fontSize:'18px',textTransform:'uppercase'}}>- Else </p>
          <p style={{ fontWeight: '450',fontSize:'18px',textTransform:'uppercase'}}>- Lapsum</p>
          <p style={{ fontWeight: '450',fontSize:'18px',textTransform:'uppercase'}}>- Casein</p>
         <div className="mt-5">
            <AiTwotoneDelete onClick={()=>deleteFromCart(elem._id)} size='15%'  className=""  /> <span   style={{ fontWeight: '450',fontSize:'18px',textTransform:'uppercase'}}><b>Remove Item</b></span>
         </div>
          </div>
            </div>
            <hr style={{backgroundColor:'black'}}/>
            </div>
            <div className="col col-3 ml-4" style={{backgroundColor:'#f0f0f0',borderRadius:'10px',height:'42vh'}}>
        <div className="row mt-3">
       <div className="col col-12">
       <h3 className="ml-4">The total amount of : </h3>  
       </div>
       <div className="col col-9 mt-5">
          <p style={{ fontWeight: '450',fontSize:'18px',   letterSpacing: '1px'}}>Temporary amount</p>
         </div>
         <div className="col col-2 mt-5">
         <p style={{ fontWeight: '450',fontSize:'18px',letterSpacing: '1px'}}><b>{total} $</b></p>
         </div>
         <div className="col col-9 mt-1">
          <p style={{ fontWeight: '450',fontSize:'18px',   letterSpacing: '1px'}}>Shipping</p>
         </div>
         <div className="col col-2 mt-1">
         <p style={{ fontWeight: '450',fontSize:'18px',letterSpacing: '1px'}}>Gratis</p>
         </div>
         </div>
         <hr style={{backgroundColor:'black'}}/>
         <div className="mt-4" style={{marginBottom:'90px'}}>
           <span><b style={{fontSize:'18px',letterSpacing: '1px'}}>The total amount of</b></span> <span style={{marginLeft:'90px'}}>{total} <b>$</b></span>               
         </div>
         <Button onClick={()=>orderNow()} variant="primary" size="lg" block>
           Order now
          </Button>
      </div>
            
              </>
            )
              :
              (
                <div className="col col-8 ml-2" style={{backgroundColor:'#f0f0f0',borderRadius:'0 0 10px 10px'}}>
            <div className="row my-3" >
          <div className="col col-5" >
          <img style={{width:'250px',height:'350px',borderRadius:'20px'}} src={elem.image} />
          </div>
          <div className="col col-5" >
          <h3 style={{ fontWeight: '500',fontSize:'24px',textTransform:'uppercase'}}>- Protein</h3>
          <p style={{ fontWeight: '450',fontSize:'18px',textTransform:'uppercase'}}>- Glutamine </p>
          <p style={{ fontWeight: '450',fontSize:'18px',textTransform:'uppercase'}}>- Casamorati </p>
          <p style={{ fontWeight: '450',fontSize:'18px',textTransform:'uppercase'}}>- Else </p>
          <p style={{ fontWeight: '450',fontSize:'18px',textTransform:'uppercase'}}>- Lapsum</p>
          <p style={{ fontWeight: '450',fontSize:'18px',textTransform:'uppercase'}}>- Casein</p>
         <div className="mt-5">
            <AiTwotoneDelete onClick={()=>deleteFromCart(elem._id)} size='15%'  className=""  /> <span   style={{ fontWeight: '450',fontSize:'18px',textTransform:'uppercase'}}><b>Remove Item</b></span>
         </div>
          </div>
            </div>
            <hr style={{backgroundColor:'black'}}/>
            </div>
              )
          }
           
            </>
          )
        }
      )
      )
      
        :
        ( 
         <div>
           </div>
        )
        }
    
   
    </div>
  
    </>
  );
}
export default SidebarHOC(Cart)
