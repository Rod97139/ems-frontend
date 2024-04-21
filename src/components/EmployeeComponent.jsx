import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

    const navigator = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = {firstName, lastName, email}
        createEmployee(employee).then(res => {
            console.log(res.data);
            navigator('/employees')
        })
    }

  return (
    <div className='container' >
        <br /><br />
        <div className='row'>
            <div className="card col-md-6 offset-md-3">
                <h2 className='text-center' >Add Employee</h2>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label htmlFor="firstName" className="form-label">First Name:</label>
                            <input 
                                type="text" 
                                placeholder='Enter Employee First Name'
                                name="firstName" 
                                id="firstName" 
                                value={firstName} 
                                className='form-control'
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="lastName" className="form-label">Last Name:</label>
                            <input 
                                type="text" 
                                placeholder='Enter Employee Last Name'
                                name="lastName" 
                                id="lastName" 
                                value={lastName} 
                                className='form-control'
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input 
                                type="text" 
                                placeholder='Enter Employee Email'
                                name="email" 
                                id="email" 
                                value={email} 
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-success" onClick={saveEmployee}>Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default EmployeeComponent
