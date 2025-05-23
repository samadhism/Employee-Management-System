import React from "react";
import styles from "../UI/Employee.module.css";



const Employee = ({detail, onSeeMore }) => {
  return (
    <div className={styles["main-content"]}>
      
        <>
          <p>{detail.empNo}</p>
          <p>{detail.empName}</p>
          <p>{detail.departmentCode}</p>
          <p>{detail.dateOfJoin}</p>
          <button className={styles["btn"]} onClick={() => onSeeMore(detail.empNo)}>
           See more
          </button>

        </>
      
    </div>
  );
};

export default Employee;