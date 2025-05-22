import { useState } from 'react'
import EmployeeView from './UI/Employee/EmployeeView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EmployeeView/>
    </>
  )
}

export default App
