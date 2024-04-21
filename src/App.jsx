import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'

function App() {
  return (
    <>
      <h1 className='text-center' >Ems front-end</h1>
      <HeaderComponent />
      <ListEmployeeComponent />
      <FooterComponent />
    </>
  )
}

export default App
