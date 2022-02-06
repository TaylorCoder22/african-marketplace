import React from 'react'
import {Route, Redirect} from 'react-router'

const TokenRoute = ({component, ...rest}) => {
    if(localStorage.getItem('token')){
        return (<Redirect to='/' />)
    }else{
        return (<Route component={component} {...rest} />)
    }
}

export default TokenRoute