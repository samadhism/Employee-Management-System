import React from 'react'
import styles from "../Employee/EmployeeView.module.css"
import Sidebar from '../../Pages/Sidebar'
import SearchSection from '../../Pages/SearchSection/SearchSection'
import Content from '../Content'


const EmployeeView = () => {
  return (
    <div className={styles["main-view"]}>
      <Sidebar/>
      <div className={styles["main-content"]}>
        <SearchSection/>
        <Content />
      </div>
    </div>
  )
}

export default EmployeeView