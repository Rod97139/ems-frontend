import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path='/' element= {<ListEmployeeComponent/>}></Route>
          <Route path='/employees' element= {<ListEmployeeComponent/>}></Route>
          <Route path='/add-employee' element= {<EmployeeComponent/>}></Route>
          <Route path='/edit-employee/:id' element= {<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent />
      </Router>
    </>
  )
}

export default App
