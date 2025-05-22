import React from "react";
import styles from "../UI/Employee.module.css";



const Employee = ({detail}) => {
  return (
    <div className={styles["main-content"]}>
      
        <>
          <p>{detail.empNo}</p>

        </>
      
    </div>
  );
};

export default Employee;