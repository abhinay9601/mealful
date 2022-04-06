import { useEffect, useState } from "react";
  import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import "./Graph1.css";

const Graph1 = (props) => {
  // fetch('./P2VO')
  // .then(data => console.log(data));
  // .then(response => response.json())
  let data = require("./P2VO.json");
  useEffect(() => {
    console.log(data);
    var count = 0;
    // eslint-disable-next-line array-callback-return
    data.map((value) => {
      if (value.schedule_time.includes("2021-05-18")) {
        count = count + 1;
      }
    });
    console.log(count);
  });
  const [dateSet, setDateSet] = useState([
    "2021-09-21",
    "2021-09-20",
    "2021-09-19",
  ]); //it contain the value of x axis i.e., three dates
  const [dateinput, setdateinput] = useState("2021-09-21"); //it stores the input date through user

  const dateChangeHandler = () => {
    setdateinput(document.getElementById("inputdate").value);
    console.log(dateinput);
    //below code is to set the array of three dates.
    if (
      parseInt(dateinput.split("-")[2]) <= 31 &&
      dateinput.split("-")[2] > 3
    ) {
      if (dateinput.split("-")[2] == 11) {
        setDateSet([
          dateinput.split("-")[0] +
            "-" +
            dateinput.split("-")[1] +
            "-" +
            parseInt(dateinput.split("-")[2]).toString(),
          dateinput.split("-")[0] +
            "-" +
            dateinput.split("-")[1] +
            "-" +
            (parseInt(dateinput.split("-")[2]) - 1).toString(),
          dateinput.split("-")[0] +
            "-" +
            dateinput.split("-")[1] +
            "-0" +
            (parseInt(dateinput.split("-")[2]) - 2).toString(),
        ]);
      } else if (dateinput.split("-")[2] == 10) {
        setDateSet([
          dateinput.split("-")[0] +
            "-" +
            dateinput.split("-")[1] +
            "-" +
            parseInt(dateinput.split("-")[2]).toString(),
          dateinput.split("-")[0] +
            "-" +
            dateinput.split("-")[1] +
            "-0" +
            (parseInt(dateinput.split("-")[2]) - 1).toString(),
          dateinput.split("-")[0] +
            "-" +
            dateinput.split("-")[1] +
            "-0" +
            (parseInt(dateinput.split("-")[2]) - 2).toString(),
        ]);
      }
      else if (dateinput.split("-")[2] <=9) {
        setDateSet([
          dateinput.split("-")[0] +
            "-" +
            dateinput.split("-")[1] +
            "-0" +
            parseInt(dateinput.split("-")[2]).toString(),
          dateinput.split("-")[0] +
            "-" +
            dateinput.split("-")[1] +
            "-0" +
            (parseInt(dateinput.split("-")[2]) - 1).toString(),
          dateinput.split("-")[0] +
            "-" +
            dateinput.split("-")[1] +
            "-0" +
            (parseInt(dateinput.split("-")[2]) - 2).toString(),
        ]);
      } 
      else {
        setDateSet([
          dateinput.split("-")[0] +
            "-" +
            dateinput.split("-")[1] +
            "-" +
            parseInt(dateinput.split("-")[2]).toString(),
          dateinput.split("-")[0] +
            "-" +
            dateinput.split("-")[1] +
            "-" +
            (parseInt(dateinput.split("-")[2]) - 1).toString(),
          dateinput.split("-")[0] +
            "-" +
            dateinput.split("-")[1] +
            "-" +
            (parseInt(dateinput.split("-")[2]) - 2).toString(),
        ]);
      }
    } else {
      setDateSet([
        dateinput.split("-")[0] +
          "-" +
          dateinput.split("-")[1] +
          "-0" +
          parseInt(dateinput.split("-")[2]).toString(),
        dateinput.split("-")[0] +
          "-" +
          dateinput.split("-")[1] +
          "-0" +
          (parseInt(dateinput.split("-")[2]) + 1).toString(),
        dateinput.split("-")[0] +
          "-" +
          dateinput.split("-")[1] +
          "-0" +
          (parseInt(dateinput.split("-")[2]) + 2).toString(),
      ]);
    }
    console.log(dateSet);
  };
  // eslint-disable-next-line array-callback-return
  props.threeVal(dateSet);
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;

  // eslint-disable-next-line array-callback-return
  data.map((value) => {
    if (value.schedule_time.includes(dateSet[0])) {
      count1 = count1 + 1;
    }
    if (value.schedule_time.includes(dateSet[1])) {
      count2 = count2 + 1;
    }
    if (value.schedule_time.includes(dateSet[2])) {
      count3 = count3 + 1;
    }
  });
  var graph = [
    { name: dateSet[0], uv: count1, amt: 2400 },
    { name: dateSet[1], uv: count2, amt: 2400 },
    { name: dateSet[2], uv: count3, amt: 2400 },
  ];
  return (
    <div className="all">
      <input
        onChange={dateChangeHandler}
        value={dateinput}
        id="inputdate"
        type="date"
        min="2021-05-18"
        max="2022-01-13"
      />
       <BarChart width={600} height={500} data={graph}>
    <XAxis dataKey="name" stroke="#8884d0" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BarChart>
    </div>
  );
};
export default Graph1;
