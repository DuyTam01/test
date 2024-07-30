import React, { useState } from 'react'
import {  Button, Row, } from 'reactstrap';
import tour_1 from "../../images/tour_1.png"
import tour_2 from "../../images/tour_2.png"
import tour_3 from "../../images/tour_3.png"
import tour_4 from "../../images/tour_4.png"
import tour_5 from "../../images/tour_5.png"
import tour_6 from "../../images/tour_6.png"
import tour_7 from "../../images/tour_7.png"
import tour_8 from "../../images/tour_8.png"
import tour_9 from "../../images/tour_9.png"
import tour_10 from "../../images/tour_10.png"
import tour_11 from "../../images/tour_11.png"
import tour_12 from "../../images/tour_12.png"
import tour_13 from "../../images/tour_13.png"
import tour_14 from "../../images/tour_14.png"
import tour_15 from "../../images/tour_15.png"
import tour_16 from "../../images/tour_16.png"
import Product from './Product';
import "./hook1.css"


export default function Hook1() {
  const [list, setList] = useState([
    { id: 1, location: "New York", src_img: tour_1, name: "Three Temples Bangkok City Tour Must Visit", price: 300 },
    { id: 2, location: "New York", src_img: tour_2, name: "Essence of Vietnam South to North", price: 300 },
    { id: 3, location: "New York", src_img: tour_3, name: "Osa Peninsula to Dominical City Tour", price: 400 },
    { id: 4, location: "New York", src_img: tour_4, name: "Mt Fuji, Hakone, Lake Ashi Cruise", price: 600 },
    { id: 5, location: "London", src_img: tour_5, name: "Three Temples Bangkok City Tour Must Visit", price: 300 },
    { id: 6, location: "London", src_img: tour_6, name: "Essence of Vietnam South to North", price: 300 },
    { id: 7, location: "London", src_img: tour_7, name: "Osa Peninsula to Dominical City Tour", price: 400 },
    { id: 8, location: "London", src_img: tour_8, name: "Mt Fuji, Hakone, Lake Ashi Cruise", price: 600 },
    { id: 9, location: "Tokyo", src_img: tour_9, name: "Three Temples Bangkok City Tour Must Visit", price: 300 },
    { id: 10, location: "Tokyo", src_img: tour_10, name: "Essence of Vietnam South to North", price: 300 },
    { id: 11, location: "Tokyo", src_img: tour_11, name: "Osa Peninsula to Dominical City Tour", price: 400 },
    { id: 12, location: "Tokyo", src_img: tour_12, name: "Mt Fuji, Hakone, Lake Ashi Cruise", price: 600 },
    { id: 13, location: "Los Angeles", src_img: tour_13, name: "Three Temples Bangkok City Tour Must Visit", price: 300 },
    { id: 14, location: "Los Angeles", src_img: tour_14, name: "Essence of Vietnam South to North", price: 300 },
    { id: 15, location: "Los Angeles", src_img: tour_15, name: "Osa Peninsula to Dominical City Tour", price: 400 },
    { id: 16, location: "Los Angeles", src_img: tour_16, name: "Mt Fuji, Hakone, Lake Ashi Cruise", price: 600 },
  ])
  const [listLocation, setListLocation] = useState("New York")
  const  fillter_list= list.filter((item)=>item.location ===listLocation) 
 
  return (
    <div>
      <div class="class_btn">
        <Button id ="btn" onClick={()=>{setListLocation("New York")}} className={listLocation === "New York" ? "active" : ""}>New York</Button>
        <Button id ="btn" onClick={()=>setListLocation("London")} className={listLocation === "London" ? "active" : ""}>London</Button>
        <Button id ="btn" onClick={()=>setListLocation("Tokyo")} className={listLocation === "Tokyo" ? "active" : ""}>Tokyo</Button>
        <Button id ="btn" onClick={()=>setListLocation("Los Angeles")} className={listLocation === "Los Angeles" ? "active" : ""}>Los Angeles</Button>
      </div>
      <Row className='row'>
        {
          fillter_list.map((item, index) => (
            <Product key={index} pro={item} />
          ))
        }
      </Row>
    </div>

  )
}
