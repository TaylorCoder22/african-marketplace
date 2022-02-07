import React from 'react'
import {Route} from 'react-router'

const TokenRoute = ({component, ...rest}) => {
    if(localStorage.getItem('token')){
        return (<Route to='/' />)
    }else{
        return (<Route component={component} {...rest} />)
    }
}

export default TokenRoute