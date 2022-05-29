import React, { useEffect, useState } from "react";
import {
    Form,
    Button,
} from "react-bootstrap";


export default function Contacts() {
    const [email, setEmail] = useState('')
    const [emailDirty, setEmailDirty] = useState( false)
    const [emailError, setEmailError] = useState( 'Email не може бути порожнім')
    const [formValid, setFormValid] = useState(false)
        //якщо помилка не порожня, то будемо щось робити
    useEffect ( () => {
        if (emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[emailError])


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Некоректний email')
        } else {
            setEmailError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            default:
                break
        }
    }
    return (
        <Form>
            <Form.Group controlId="fromBasicEmail" className="w-50">
                <Form.Label>Email Address</Form.Label>
                {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
                <Form.Control onChange={e => emailHandler(e)} name="email" value={email} onBlur={e => blurHandler(e)} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicTextField" className="w-50">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Button disabled={!formValid} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}