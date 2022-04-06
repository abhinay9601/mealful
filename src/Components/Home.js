import { useState } from "react";
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import "./Home.css";


const Home= () =>{
  const [val,setVal]=useState(["2021-09-21",
  "2021-09-20",
  "2021-09-19"]);
  const threeVal=(arg)=>{
  setVal(arg);
  console.log(val);
  }
return(
<div className="whole">
  <div className="header">
    <p className="mealful">mealful</p>
    <p>Graphical representation of data by Abhinay Singh</p>
  </div>
  <div className="graph">
<Graph1  threeVal={threeVal} ></Graph1>
<Graph2 val={val}></Graph2>
</div>
</div>
);
};
export default Home;