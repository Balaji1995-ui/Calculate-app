import React, { useState } from "react";
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Style.css';
const Calcs=()=>{

  

    const [result, setResult]= useState("");

    const handleClick=(e)=>{
setResult(result.concat(e.target.name))

    }
    const backSpace=()=>{
        setResult("");
    }
    const Clear=()=>{
        setResult(result.slice(0,result.length -1));
    }
 const calculate=()=>{
    try {
        setResult(eval(result).toString());
    } catch (error) {
        
        setResult("ERROR");
    }
 }
    return(
        <div>
            <div className="Box">
              <h1 >Calculator-Basic</h1>
              <form>
                <input type="text" value={result}></input>
              </form>
              <div className="number6">
               <Button color="danger"onClick={backSpace} style={{width:"59px",
height: "38px",
borderradius: "9px",marginTop:"10px"}} name="backSpace">Clear</Button>  { ''}   
               <Button style={{width:"59px",
height: "38px",
borderradius: "9px" ,marginTop:"10px"}}  color="warning" onClick={Clear}name="Clear">C</Button>{ ' '}     
               <Button style={{width:"59px",
height: "38px",
borderradius: "9px" ,marginTop:"10px"}}  color="warning" onClick={handleClick} name="/">/</Button>  { ''}   
               <Button  style={{width:"59px",
height: "38px",
borderradius: "9px" ,marginTop:"10px"}} color="warning" onClick={handleClick} name="-">-</Button>  { ''}  
                  
              </div>
              <div className="Number1">
               <Button   style={{width:"59px",
height: "38px",
borderradius: "9px"}} onClick={handleClick} name="7">7</Button>    { ''} 
               <Button   style={{width:"59px",
height: "38px",
borderradius: "9px"}}onClick={handleClick}name="8">8</Button>   { ''}  
               <Button  style={{width:"59px",
height: "38px",
borderradius: "9px"}}onClick={handleClick} name="9">9</Button>   { ''}  
               <Button  style={{width:"59px",
height: "38px",
borderradius: "9px"}}onClick={handleClick} name="0">0</Button>    { ''} 
              </div>
              <div className="Number2">
               <Button   style={{width:"59px",
height: "38px",
borderradius: "9px"}}onClick={handleClick} name="5">5</Button> { ''}    
               <Button  style={{width:"59px",
height: "38px",
borderradius: "9px"}}  onClick={handleClick}name="4">4</Button> { ''}    
               <Button   style={{width:"59px",
height: "38px",
borderradius: "9px"}}onClick={handleClick} name="3">3</Button>  { ''}   
               <Button   style={{width:"59px",
height: "38px",
borderradius: "9px"}}onClick={handleClick} name="2">2</Button>    { ''} 
              </div>
              <div className="Number3">
               <Button   style={{width:"59px",
height: "38px",
borderradius: "9px"}}onClick={handleClick} name="1">1</Button>    { ''} 
               <Button   style={{width:"59px",
height: "38px",
borderradius: "9px"}} onClick={handleClick}name="*">*</Button>   { ''}  
               <Button  style={{width:"59px",
height: "38px",
borderradius: "9px"}} onClick={handleClick} name="%">%</Button>  { ''}  
        <Button  style={{width:"59px",
height: "38px",
borderradius: "9px"}} onClick={handleClick} name="^">^</Button>   { ''}  
           
              </div>
              <div className="number5">
       
        <Button  style={{width:"59px",
height: "38px",
borderradius: "9px"}} onClick={handleClick} name=".">.</Button> { ''}   
               <Button  style={{width:"59px",
height: "38px",
borderradius: "9px"}} onClick={calculate} id='result' name="=">=</Button>   { ''} 
<Button  style={{width:"59px",
height: "38px",
borderradius: "9px", }} onClick={handleClick}  name="+">+</Button>   { ''} 
              </div>
            </div>

        </div>
    )
}
export default Calcs;