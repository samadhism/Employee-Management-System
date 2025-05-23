import React, { use, useEffect, useState } from "react";
import Searchbar from "../Pages/Searchbar/Searchbar";
import styles from "./../UI/Content.module.css";
import Employee from "./Employee.jsx";

const Content = () => {
    const [details, setDetails] = useState([]);
  
    useEffect(function () {
      async function getEmployyeDetails() {
        const apiToken = "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf";
  
        const res = await fetch(
            `/api/v1.0/Employees?apiToken=${apiToken}`,
          {
            headers: {
                apiToken: apiToken,
            },
          }
        );
        const data = await res.json();
        setDetails(data);
      }
  
      getEmployyeDetails();
    }, []);


  return (
    <div>
         <div>
      <div className={styles["main-bar"]}>
        <Searchbar />
        <button className={styles["btn"]}>Add a new Employee</button>
      </div>
      <div className={styles["main-container"]}>
        <div className={styles["main-content"]}>
          {details.map((detail) => (
            <Employee key={detail.empNo} detail={detail} />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Content