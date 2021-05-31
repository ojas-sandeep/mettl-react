import React, { Component, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllAssessments, SetAssessment } from '../components/Api'

import { Link } from 'react-router-dom'
import { Dropdown, Form } from 'react-bootstrap';

const Registration = () => {
    const [assessment, setAssessment] = useState([])
    const [emails, setEmails] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        assessmentId: '',
        sourceApp:'Ojas-Java-Test',
        recipientsArray: []
    });

    const {
        name,
        recipients,
        assessmentId,
        sourceApp
    } = formData

    useEffect(() => {
        getAllAssessments().then(data => setAssessment(data.assessment))
    }, [])
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const handleKeyDown = evt => {
        if (["Enter", "Tab", ","].includes(evt.key)) {
          evt.preventDefault();
    
          var value = recipients.trim();
    
          if (value && isValid(value)) {
            setFormData({
                ...formData, recipientsArray: [...recipients, value],
                recipients: ""
            });
          }
        }
      };

      const isValid = (email) => {
        let error = null;
    
        // if (this.isInList(email)) {
        //   error = `${email} has already been added.`;
        // }
    
        // if (!this.isEmail(email)) {
        //   error = `${email} is not a valid email address.`;
        // }
    
        if (error) {
          this.setState({ error });
    
          return false;
        }
    
        return true;
      }

    const onSubmit = e => {
        e.preventDefault();
        SetAssessment(formData)
        .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            console.log(error);
        })
        setFormData({...formData, recipients})
        console.log(formData);
    }

    return (
        <div className="col-md-6 mx-auto">

            <Form onSubmit={e => onSubmit(e)}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label >Name</Form.Label>
                    <Form.Control type="text" placeholder="enter Name" name='name' value={name} onChange={e => onChange(e)}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select assessment id</Form.Label>
                    <Form.Control as="select">
                        {assessment.map((data) => (
                            <option>{data.id}</option>
                        ))}
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="enter emails" name='recipients' value={recipients} onKeyDown={handleKeyDown}
          onChange={onChange} />
                </Form.Group>
                <button type='submit' >Submit</button>
            </Form>
        </div>
    )
}


// class Registration extends Component {

//     constructor(props) {

//         super(props)

//         this.state = {
//             items : []

//         }
//     }

//     comp



//     render() {

//         const {name,email,location,course,phone}=this.state

//         return (<>

//             <h2 className="text-center py-3"> User Registration</h2>

//             <form className="mx-auto w-50" onSubmit={this.submitHandler}>

//                 <div className="form-group p-1">
//                     <label>Name</label>
//                     <input className="form-control" type="text"
//                     />
//                 </div>

//                 <div className="form-group ">
//                     <label>Email</label>
//                     <input className="form-control" type="text"

//                     />
//                 </div>

//                 <div className="form-group my-3">
//                     <div class=" dropdown">
//                         <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                             Dropdown button
//   </button>
//                         <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                             <a class="dropdown-item" href="#">Action</a>
//                             <a class="dropdown-item" href="#">Another action</a>
//                             <a class="dropdown-item" href="#">Something else here</a>
//                         </div>
//                     </div>
//                 </div>



//                 <button className="btn btn-primary mx-5" type="submit"> Submit</button>

//             </form>


//         </>)
//     }
// }


export default Registration;