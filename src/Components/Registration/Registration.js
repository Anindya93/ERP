import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useState } from 'react';

export default function Registration() {
    const validateEmail = RegExp('^([a-z0-9._]+)@([a-z]{5,12}).([a-z.]{2,20})$');
    const validatePwd = RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!@#$%&*]).{4,15}$');
    const validatePhone = RegExp('[6-9]{1}[0-9]{9}');
    const [inputState, setInputState] = useState({
        isError: {
            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',
            PhoneNo: '',
        }
    })

    const handleChange = (event) => {
        event.persist();
        // console.log('Events :',event);
        let { name, value } = event.target;
        let isErr = { ...inputState.isError };
        switch (name) {
            case "FirstName":
                isErr.FirstName =
                    value.length < 4 ? "*atleast 4 characters required" : "";
                break;
            case "LastName":
                isErr.LastName =
                    value.length < 4 ? "*atleast 4 characters required" : "";
                break;
            case "Email":
                isErr.Email =
                    validateEmail.test(value) ? "" : "Wrong Pattern";
                break;
            case "Password":
                isErr.Password =
                    validatePwd.test(value) ? "" : "Wrong Pattern";
                break;
            case "PhoneNo":
                isErr.PhoneNo =
                    validatePhone.test(value) ? "" : "Wrong Pattern";
                break;

            default:
                break;
        }


        setInputState({ ...inputState, [name]: value, isError: isErr });
        console.log("Error: ", inputState.isError);
        // console.log("Inputstate: ",inputState);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("After Submit: ", inputState);
    }
  return (
    <>
            <Container className='main-section'>
                <Form onSubmit={submitHandler}>
                    <h1>Enter You Details: </h1>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your First Name" name='FirstName' onChange={handleChange} />
                        {inputState.isError.FirstName.length > 0 && (<span>{inputState.isError.FirstName}</span>)}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Last Name" name='LastName' onChange={handleChange} />
                        {inputState.isError.LastName.length > 0 && (<span>{inputState.isError.LastName}</span>)}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your email" name='Email' onChange={handleChange} />
                        {inputState.isError.Email.length > 0 && (<span>{inputState.isError.Email}</span>)}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder=" Enter Password" name='Password' onChange={handleChange} />
                        {inputState.isError.Password.length > 0 && (<span>{inputState.isError.Password}</span>)}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phone No.</Form.Label>
                        <Form.Control type="text" placeholder=" 1234567890 " name='PhoneNo' maxLength={10} onChange={handleChange} />
                        {inputState.isError.PhoneNo.length > 0 && (<span>{inputState.isError.PhoneNo}</span>)}
                    </Form.Group>

                    <Button className="square" onClick={() => console.log('click')}>
                        Sign Up
                    </Button>
                </Form>
            </Container>
        </>
  )
}
