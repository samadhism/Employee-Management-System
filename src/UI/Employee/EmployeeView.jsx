import React from 'react'
import styles from "../Employee/EmployeeView.module.css"
import Sidebar from '../../Pages/Sidebar'
import SearchSection from '../../Pages/SearchSection/SearchSection'
import Content from '../Content'


const EmployeeView = () => {
  return (
    <div>
        <Sidebar/>
        <div>
            <SearchSection/>
            <Content/>
        </div>
    </div>
  )
}

export default EmployeeView