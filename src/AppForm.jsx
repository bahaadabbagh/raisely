import React, {useState} from 'react';
import { Button, Form, Container, Col } from 'react-bootstrap';

export default function AppForm() {

  const [emailValid, setEmailValid] = useState(true);

  const [signUpForm, setSignUpForm] = useState({
    "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
    "data": {
     "firstName": "",
     "lastName": "",
     "email": "",
     "password": ""
    }
   });
   const handleEmail = (e)=>{
    const emailValdation = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
        "data":{
        "email": signUpForm.email,
        }
      })
  };
  fetch('https://api.raisely.com/v3/check-user',emailValdation)
  .then(async response=>{
    const responseJson = await response.json()
    if(responseJson.data.status ==="OK"){
      setEmailValid(true)
    }
    else if(responseJson.data.status === "EXISTS"){
      setEmailValid(false)
      alert("Email already exists, please use another one")
    }
   })
  }
   const handleInput = (key)=> (e) => {
     setSignUpForm ({ ...signUpForm, [key]:e.target.value});
   }
   const submitHandler= async (e)=> {
    e.preventDefault();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
          "data": {
           "firstName": signUpForm.firstName,
           "lastName": signUpForm.lastName,
           "email": signUpForm.email,
           "password": signUpForm.password
          }
        })
    };


      if(emailValid){
        fetch('https://api.raisely.com/v3/signup', requestOptions)
        .then(async response => {
            const data = await response.json();
            if (data.status < 200 || data.status > 299){
             alert( data.errors[0].message)
            }
          })

        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
      }
      else if(!emailValid){
        alert("Email is not valid")
      }
}
    return (
        <Container>
            <Col>
            <h1>Welcome to my attempt of getting a job with Raisely </h1>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="name" placeholder="First Name" onChange={handleInput('firstName')} />
          </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="name" placeholder="Last Name" onChange={handleInput('lastName')} />
          </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control autoComplete="off" type="email" placeholder="Enter email"  onChange={handleInput('email')} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password"onChange={handleEmail} onInput={handleInput('password')}/>
        </Form.Group>
        <Button variant="primary" type="submit" className="submitButton" >
          Submit
        </Button>
      </Form>
      </Col>
      </Container>
    )
}
