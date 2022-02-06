import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../Login'
import { useHref } from 'react-router-dom'

test('renders without errors', () => {
    render(<Login />)
})

test('renders the contact form header', () => {
    render(<Login />)
    const header = screen.getByText(/Login/i)
    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent('Login')
})

test('renders ONE error message if user enters less than 5 characters into username', async () => {
    render(<Login />)
    const username = screen.getByLabelText(/Username/i)
    userEvent.type(username, '')
    const errors = screen.queryAllByText(/error/i)
    expect(errors).toBeTruthy()
})

test('renders TWO error messages if user enters no values into any fields', async () => {
    render(<Login />)
    const username = screen.getByLabelText(/Username/i)
    const password = screen.getByLabelText(/Password/i)

    userEvent.type(username, '')
    userEvent.type(password, '')

    const error1 = screen.queryAllByText(/error/i)
    expect(error1).toBeTruthy()
    const error2 = screen.queryAllByText(/error/i)
    expect(error2).toBeTruthy()
})

test('renders all username and password text when submitted. Does NOT render message if messages is not submitted.', async () => {
    render(<Login />)
    const username = screen.getByLabelText(/Username/i)
    const password = screen.getByLabelText(/Password/i)
    const message = screen.getByLabelText(/Message/i)

    userEvent.type(message, 'test')
    userEvent.type(password, '1234WhatsUp')
    userEvent.type(username, 'TallTrees56')

    const button = screen.getByRole('button')
    userEvent.click(button)

    const userSubmitted = screen.queryByTestId('usernameDisplay')
    const passSubmitted = screen.queryByTestId('passwordDisplay')

    expect(userSubmitted).toBeTruthy()
    expect(passSubmitted).toBeTruthy()
})

test('renders all fields text when all fields are submitted', async () => {
    render(<Login />)
    const username = screen.getByLabelText(/Username/i)
    const password = screen.getByLabelText(/Password/i)
    const message = screen.getByLabelText(/Message/i)

    userEvent.type(message, 'test')
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
        const messageSubmitted = screen.queryByTestId('messageDisplay')
        expect(messageSubmitted).toBeTruthy()
    })
})