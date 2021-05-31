import React, { Component, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllAssessments } from '../components/Api'

import { Link } from 'react-router-dom'
import { Dropdown, Form, Table } from 'react-bootstrap';

const AllAssessment = () => {

  const [assessment, setAssessment] = useState([])

  useEffect(() => {
    getAllAssessments().then(data => {
      setAssessment(data.assessments)
      console.log(data)
    })
    
  }, [])


  return (
    <div className="col-md-6 mx-auto">
      <h1>List of Assessments</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
            {assessment.map((data) => (
              <tr>
                <td>#</td>
              <td>{data.id}</td>
              <td>{data.name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}



export default AllAssessment;