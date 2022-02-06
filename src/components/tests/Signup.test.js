import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Signup from '../Signup'

test('renders without errors', () => {
    render(<Signup />)
})

test('renders the contact form header', () => {
    render(<Signup />)
    const header = screen.getByText(/Signup/i)
    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent('Signup')
})

test('renders ONE error message if user enters less than 5 characters into username', async () => {
    render(<Signup />)
    const username = screen.getByLabelText(/Username/i)
    userEvent.type(username, '')
    const errors = screen.queryAllByText(/error/i)
    expect(errors).toBeTruthy()
})

test('renders THREE error messages if user enters no values into any fields.', async () => {
    render(<Signup />)
    const username = screen.getByLabelText(/Username/i)
    const password = screen.getByLabelText(/Password/i)
    const firstName = screen.getByLabelText(/First Name/i)
    const lastName = screen.getByLabelText(/Last Name/i)
    const email = screen.getByLabelText(/Email/i)

    userEvent.type(username, '')
    userEvent.type(password, '')
    userEvent.type(firstName, '')
    userEvent.type(lastName, '')
    userEvent.type(email, '')

    const error1 = screen.queryAllByText(/error/i)
    expect(error1).toBeTruthy()
    const error2 = screen.queryAllByText(/error/i)
    expect(error2).toBeTruthy()
    const error3 = screen.queryAllByText(/error/i)
    expect(error3).toBeTruthy()
    const error4 = screen.queryAllByText(/error/i)
    expect(error4).toBeTruthy()
    const error5 = screen.queryAllByText(/error/i)
    expect(error5).toBeTruthy()
})

test('renders ONE error message if user enters a valid username and password but no email', async () => {
    render(<Signup />)
    const username = screen.getByLabelText(/Username/i)
    const password = screen.getByLabelText(/Password/i)
    const firstName = screen.getByLabelText(/First Name/i)
    const lastName = screen.getByLabelText(/Last Name/i)
    const email = screen.getByLabelText(/Email/i)
    
    userEvent.type(username, 'tester')
    userEvent.type(password, 'tester')
    userEvent.type(firstName, 'tester')
    userEvent.type(lastName, 'tester')
    userEvent.type(email, '')

    const errorEmail = screen.queryAllByText(/error/i)
    expect(errorEmail).toBeTruthy()
})

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    render(<Signup />)
    const username = screen.getByLabelText(/Username/i)
    const password = screen.getByLabelText(/Password/i)
    const firstName = screen.getByLabelText(/First Name/i)
    const lastName = screen.getByLabelText(/Last Name/i)
    const email = screen.getByLabelText(/Email/i)

    userEvent.type(username, 'tester')
    userEvent.type(password, 'tester')
    userEvent.type(firstName, 'tester')
    userEvent.type(lastName, 'tester')
    userEvent.type(email, 'bademaildata')

    const emailError = screen.queryByText(/email must be a valid email address/i)
    expect(emailError).toBeTruthy()
})

test('renders "lastName is a required field" if a last name is not entered and the submit button is clicked', async () => {
    render(<Signup />)
    const username = screen.getByLabelText(/Username/i)
    const password = screen.getByLabelText(/Password/i)
    const firstName = screen.getByLabelText(/First Name/i)
    const lastName = screen.getByLabelText(/Last Name/i)
    const email = screen.getByLabelText(/Email/i)    

    userEvent.type(username, 'tester')
    userEvent.type(password, 'tester')
    userEvent.type(firstName, 'tester')
    userEvent.type(lastName, '')
    userEvent.type(email, 'bademaildata@gmail.com')

    const theButton = screen.getByRole('button')
    userEvent.click(theButton)

    const error = screen.queryAllByText(/lastName is a required field/i)
    expect(error).toBeTruthy()
})

test('renders all username, password, firstName, lastName and email text when submitted. Does NOT render message if message is not submitted', async () => {
    render(<Signup />)
    const username = screen.getByLabelText(/Username/i)
    const password = screen.getByLabelText(/Password/i)
    const firstName = screen.getByLabelText(/First Name/i)
    const lastName = screen.getByLabelText(/Last Name/i)
    const email = screen.getByLabelText(/Email/i) 
    const message = screen.getByLabelText(/Message/i)

    userEvent.type(message, 'test')
    userEvent.type(email, 'whatever@email.com')
    userEvent.type(lastName, 'murphy')
    userEvent.type(firstName, 'snarfles')
    userEvent.type(password, '1234WhatsUp')
    userEvent.type(username, 'TallTrees56')

    const button = screen.getByRole('button')
    userEvent.click(button)

    const userSubmitted = screen.queryByTestId('usernameDisplay')
    const passSubmitted = screen.queryByTestId('passwordDisplay')
    const firstSubmitted = screen.queryByTestId('firstnameDisplay')
    const lastSubmitted = screen.queryByTestId('lastnameDisplay')
    const emailSubmitted = screen.queryByTestId('emailDisplay')

    expect(userSubmitted).toBeTruthy()
    expect(passSubmitted).toBeTruthy()
    expect(firstSubmitted).toBeTruthy()
    expect(lastSubmitted).toBeTruthy()
    expect(emailSubmitted).toBeTruthy()
})

test('renders all fields text when all fields are submitted', async () => {
    render(<Signup />)
    const username = screen.getByLabelText(/Username/i)
    const password = screen.getByLabelText(/Password/i)
    const firstName = screen.getByLabelText(/First Name/i)
    const lastName = screen.getByLabelText(/Last Name/i)
    const email = screen.getByLabelText(/Email/i) 
    const message = screen.getByLabelText(/Message/i)

    userEvent.type(message, 'test')
    userEvent.type(email, 'whatever@email.com')
    userEvent.type(lastName, 'murphy')
    userEvent.type(firstName, 'snarfles')
    userEvent.type(password, '1234WhatsUp')
    userEvent.type(username, 'TallTrees56')

    const button = screen.getByRole('button')
    userEvent.click(button)

    await waitFor(() => {
        const userSubmitted = screen.queryByTestId('usernameDisplay')
        expect(userSubmitted).toBeTruthy()
    })
    await waitFor(() => {
        const passSubmitted = screen.queryByTestId('passwordDisplay')
        expect(passSubmitted).toBeTruthy()
    })
    await waitFor(() => {
        const firstSubmitted = screen.queryByTestId('firstnameDisplay')
        expect(firstSubmitted).toBeTruthy()
    })
    await waitFor(() => {
        const lastSubmitted = screen.queryByTestId('lastnameDisplay')
        expect(lastSubmitted).toBeTruthy()
    })
    await waitFor(() => {
        const emailSubmitted = screen.queryByTestId('emailDisplay')
        expect(emailSubmitted).toBeTruthy()
    })
    await waitFor(() => {
        const messageSubmitted = screen.queryByTestId('messageDisplay')
        expect(messageSubmitted).toBeTruthy()
    })
})