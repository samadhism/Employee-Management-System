import React, { useEffect, useState } from "react";

const EmployeeDetails = ({ empId, onBack }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    async function fetchEmployeeById() {
      const apiToken = "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf";

      const res = await fetch(`/api/v1.0/Employee/${empId}`, {
      headers: {
          "apiToken": apiToken
      }


});


      const data = await res.json();
      setEmployee(data);
    }

    fetchEmployeeById();
  }, [empId]);

  if (!employee) return <p>Loading...</p>;

  return (
    <div>
      <h2>Employee Details</h2>
      <p><strong>Emp No:</strong> {employee.empNo}</p>
      <p><strong>Name:</strong> {employee.empName}</p>
      <p><strong>Department:</strong> {employee.departmentCode}</p>
      <p><strong>Date of Join:</strong> {employee.dateOfJoin}</p>
      <p><strong>Date of Birth:</strong> {employee.dateOfBirth}</p>
      <p><strong>Basic Salary:</strong> {employee.basicSalary}</p>
      <p><strong>Activity:</strong> {employee.isActive}</p>
      <button onClick={onBack} >
        Back to list
      </button>
    </div>
  );
};

export default EmployeeDetails;
