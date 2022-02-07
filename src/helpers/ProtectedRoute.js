import React from 'react'
import {Route} from 'react-router'

const ProtectedRoute = ({component, ...rest}) => {
    return <Route {...rest} render={(props) => {
        if(localStorage.getItem('token')){
            return (<component {...props} />)
        }else{
            return <Route to='login' />
        }
    }} />
}

export default ProtectedRoute