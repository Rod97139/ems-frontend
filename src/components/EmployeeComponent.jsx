import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

    const navigator = useNavigate()

    const {id} = useParams()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (id) {
            getEmployee(id).then(res => {
                const employee = res.data
                setFirstName(employee.firstName)
                setLastName(employee.lastName)
                setEmail(employee.email)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [id])

    const [errors, setErrors] = useState({
        firstName: '', 
        lastName: '', 
        email: ''
    })

    

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const employee = {firstName, lastName, email}
            if (id) {
                updateEmployee(id, employee).then(res => {
                    console.log(res.data);
                    navigator('/employees')
                }).catch(err => {
                    console.log(err)
                })
            } else {
                createEmployee(employee).then(res => {
                    console.log(res.data);
                    navigator('/employees')
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }

    const validateForm = () => {
        let valid = true
        const errorsCopy = {...errors}
        if (firstName.trim()) {
            errorsCopy.firstName = ''
        } else {
            errorsCopy.firstName = 'First Name is required'
            valid = false
        }

        if (lastName.trim()) {
            errorsCopy.lastName = ''
        } else {
            errorsCopy.lastName = 'Last Name is required'
            valid = false
        }

        if (email.trim()) {
            errorsCopy.email = ''
        } else {
            errorsCopy.email = 'Email is required'
            valid = false
        }

        setErrors(errorsCopy)
        return valid
    }

    const pageTitle = () => {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (
    <div className='container' >
        <br /><br />
        <div className='row'>
            <div className="card col-md-6 offset-md-3">
                {pageTitle()}
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
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="lastName" className="form-label">Last Name:</label>
                            <input 
                                type="text" 
                                placeholder='Enter Employee Last Name'
                                name="lastName" 
                                id="lastName" 
                                value={lastName} 
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input 
                                type="text" 
                                placeholder='Enter Employee Email'
                                name="email" 
                                id="email" 
                                value={email} 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                        <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default EmployeeComponent
