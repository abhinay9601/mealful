import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "./Graph2.css";

const Graph2 = (props) => {
  var data = require("./P2VO.json");
  const [selectedDate, setSelectedDate] = useState("2021-09-20");
  // var select = document.getElementById("date").value;
  const dateSelectHandler = () => {
    setSelectedDate(document.getElementById("date").value);
  };
  var timearr = [0, 0, 0, 0];
  // eslint-disable-next-line array-callback-return
  data.map((val) => {
    if (val.schedule_time.includes(selectedDate)) {
      var time = val.schedule_time.split(" ")[1].split(":")[0];
      if (time >= "09" && time < 12) {
        timearr[0] = timearr[0] + 1;
      }
      if (time >= 12 && time < 15) {
        timearr[1] = timearr[1] + 1;
      }
      if (time >= 15 && time < 18) {
        timearr[2] = timearr[2] + 1;
      }
      if (time >= 18 && time <= 21) {
        timearr[3] = timearr[3] + 1;
      }
    }
  });
  console.log(timearr);
  const graph = [
    { name: "9am-12pm", uv: timearr[0], amt: 2400 },
    { name: "12pm-3pm", uv: timearr[1], amt: 2400 },
    { name: "3pm-6pm", uv: timearr[2], amt: 2400 },
    { name: "6pm-9pm", uv: timearr[3], amt: 2400 },
  ];
  return (
    <div className="all">
      <select id="date" onChange={dateSelectHandler}>
        <option value={props.val[0]}>{props.val[0]}</option>
        <option value={props.val[1]} selected>{props.val[1]}</option>
        <option value={props.val[2]}>{props.val[2]}</option>
      </select>
      <BarChart width={600} height={500} data={graph}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};
export default Graph2;
