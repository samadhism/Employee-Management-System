import React, { useEffect, useState } from "react";
import styles from "../../UI/Employee/AddEmployee.module.css"

const AddEmployee = ({onClick}) => {
    async function addEmployeDetails(employeeData) {
        const apiToken = "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf";


        const transformedData = {
            ...employeeData,
            basicSalary: Number(employeeData.basicSalary),
            isActive: Boolean(employeeData.isActive === true || employeeData.isActive === "true"),
            dateOfJoin: new Date(employeeData.dateOfJoin).toISOString(),
            dateOfBirth: new Date(employeeData.dateOfBirth).toISOString(),
          };
    
        const res = await fetch(`/api/v1.0/Employees?apiToken=${apiToken}`, {
          method: "POST",
          headers: {
            apiToken: apiToken,
            "Content-Type": "application/json",
          },
    
          body: JSON.stringify(transformedData),
        });
      }

      const [formData, setFormData] = useState({
        empNo: "",
        empName: "",
        empAddressLine1: "",
        empAddressLine2: "",
        empAddressLine3: "",
        departmentCode: "",
        dateOfJoin: "",
        dateOfBirth: "",
        basicSalary: "",
        isActive: false,
      });

      function handleAddSubmit(event) {
        event.preventDefault();
        console.log(formData);
        addEmployeDetails(formData);
        console.log(formData)
      }

  return (
    <>
      <div className={styles["main-contnent"]}>
        <div className={styles["input-forms"]}>
          <form className={styles["input-forms"]} onClick={handleAddSubmit} action="">
            <input
              placeholder="empNo"
              className={styles["input"]}
              type="text"
              value={formData.empNo}
              onChange={(event) =>
                setFormData({ ...formData, empNo: event.target.value })
              }
            />
            <input
              placeholder="empName"
              className={styles["input"]}
              type="text"
              value={formData.empName}
              onChange={(event) =>
                setFormData({ ...formData, empName: event.target.value })
              }
            />
            <input
              placeholder="empAddressLine1"
              className={styles["input"]}
              type="text"
              value={formData.empAddressLine1}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  empAddressLine1: event.target.value,
                })
              }
            />
            <input
              placeholder="empAddressLine2"
              className={styles["input"]}
              type="text"
              value={formData.empAddressLine2}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  empAddressLine2: event.target.value,
                })
              }
            />
            <input
              placeholder="empAddressLine3"
              className={styles["input"]}
              type="text"
              value={formData.empAddressLine3}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  empAddressLine3: event.target.value,
                })
              }
            />
            <input
              placeholder="departmentCode"
              className={styles["input"]}
              type="text"
              value={formData.departmentCode}
              onChange={(event) =>
                setFormData({ ...formData, departmentCode: event.target.value })
              }
            />
            <input
              placeholder="dateOfJoin"
              className={styles["input"]}
              type="date"
              value={formData.dateOfJoin}
              onChange={(event) =>
                setFormData({ ...formData, dateOfJoin: event.target.value })
              }
            />
            <input
              placeholder="dateOfBirth"
              className={styles["input"]}
              type="date"
              value={formData.dateOfBirth}
              onChange={(event) =>
                setFormData({ ...formData, dateOfBirth: event.target.value })
              }
            />
            <input
              placeholder="basicSalary"
              className={styles["input"]}
              type="number"
              value={formData.basicSalary}
              onChange={(event) =>
                setFormData({ ...formData, basicSalary: event.target.value })
              }
            />
            <input
              placeholder="isActive"
              className={styles["input"]}
              type="checkbox"
              checked={formData.isActive === true}
              onChange={(event) =>
                setFormData({ ...formData, isActive: event.target.checked})
              }
            />

            <button type="submit" className={styles["btn"]}>Add Employee</button>
            <button onClick={onClick} className={styles["btn"]}>
              close
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddEmployee