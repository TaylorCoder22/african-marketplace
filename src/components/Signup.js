import React, {Component} from 'react'
import axios from 'axios'
import Container from './StyledComponents/ContainerStyled'
import {Form, Label, Input} from './StyledComponents/FormStyles'
import HeaderOne from './StyledComponents/H1Styled'

class SignUpForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    sellerhandler = (event) => {
        this.setState({seller: event.target.type === 'checkbox' ? event.target.checked : event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios
        .post('https://african-marketplace3.herokuapp.com/api/auth/register', this.state)
        .then((res) => {
            console.log('response:', res)
            window.location.href = '/login'
        })
        .catch((err) => {
            console.log('sad path:(', err.response.data)
        })
    }

    render(){
        const {first_name, last_name, password, email, username} = this.state
        return(
            <Container>
                <Form onSubmit={this.handleSubmit} className='container'>
                    <HeaderOne>Sign Up</HeaderOne>
                    <Label>First Name:</Label>
                    <Input type='text' name='first_name' value={first_name} onChange={this.changeHandler} placeholder='First Name...' />
                    <br />
                    <Label>Last Name:</Label>
                    <Input type='text' name='last_name' value={last_name} onChange={this.changeHandler} placeholder='Last Name...' />
                    <br />
                    <Label>Username:</Label>
                    <Input type='text' name='username' value={username} onChange={this.changeHandler} placeholder='Username...' />
                    <br />
                    <Label>Password:</Label>
                    <Input type='password' name='password' value={password} onChange={this.changeHandler} placeholder='Password...' />
                    <br />
                    <Label>Email:</Label>
                    <Input type='text' name='email' value={email} onChange={this.changeHandler} placeholder='Email...' />
                    <br />
                    <br />
                    <Input type='submit' value='Submit' />
                </Form>
            </Container>
        )    
    }
}

export default SignUpForm