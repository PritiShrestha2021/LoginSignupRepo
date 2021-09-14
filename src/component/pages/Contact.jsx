import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../table/table";

function Contact() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      const getData = await axios.get("http://localhost:3001/signup/get", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      //console.log(getData);
      setData(getData.data);
    };
    fetchdata();
  }, []);

  return <div>{data && <Table data={data} value={true}></Table>}</div>;
}

export default Contact;
