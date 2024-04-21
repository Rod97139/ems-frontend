import './App.css'
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
        </Routes>
        <FooterComponent />
      </Router>
    </>
  )
}

export default App
