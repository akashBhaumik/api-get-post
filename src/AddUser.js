import axios from 'axios'
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class AddUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            phone: "",
            username: "",
            street_address: "",
            city_name: "",
            country_name: "",
            state_name: "",
            pin_code: ""
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        axios.post("https://www.webappfactory.co/shaktipeeth/public/api/add-user", this.state)
            .then(response => {
                this.props.history.push("/user")
                console.log(response)
            }).catch(error => {
                console.log(error)
            })

        console.log(this.state)
    }

    render() {
        const { name, email, phone, username, street_address, city_name, country_name, state_name, pin_code } = this.state
        return (
            <div style={{
                display: 'block',
                width: 700,
                padding: 30
            }}>
                <h4><u>User Details :-</u> </h4>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group>
                        <Form.Label>Enter your full name:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter your full name" name="name" value={name} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your email address:</Form.Label>
                        <Form.Control type="email"
                            placeholder="Enter your your email address" name="email" value={email} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your phone number:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter your your phone number" name="phone" value={phone} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your Username:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter your your username" name="username" value={username} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your Street Address:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter your your Address" name="street_address" value={street_address} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your City Name:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter your your City Name" name="city_name" value={city_name} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your Country Name:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter your your Country Name" name="country_name" value={country_name} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your State name:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter your your State name" name="state_name" value={state_name} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your Pin :</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter your your Pin " name="pin_code" value={pin_code} onChange={this.changeHandler} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Click here to submit form
                    </Button>
                </Form>
            </div>

        )
    }
}

export default AddUser
