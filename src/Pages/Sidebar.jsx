import React from 'react';
import styles from '../Pages/Sidebar.module.css';
import { FaBuilding, FaUser } from 'react-icons/fa';

const Sidebar = ({ onSelect }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.topPadding}></div>
      <button className={styles.menuItem} onClick={() => onSelect('employees')}>
        <FaUser className={styles.icon} />
        <span>Employees</span>
      </button>
      <button className={styles.menuItem} onClick={() => onSelect('departments')}>
        <FaBuilding className={styles.icon} />
        <span>Departments</span>
      </button>
    </div>
  );
};

export default Sidebar;
