import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProtectedRoute from './helpers/ProtectedRoute'
import TokenRoute from './helpers/TokenRoute'
import Home from './components/Home'
import About from './components/About'
import SignUpForm from './components/Signup'
import ItemContext from './context/itemContext'
import ItemList from './components/ItemList'
import ItemForm from './components/ItemForm'
import Item from './components/Item'
import Login from './components/Login'
import {axiosWithAuth} from './helpers/axiosWithAuth'
import {useLocalStorage} from './hooks/useLocalStorage'

import Container from './components/StyledComponents/ContainerStyled'
import HeaderOne from './components/StyledComponents/H1Styled'
import Nav from './components/StyledComponents/NavStyled'
import StyledLink from './components/StyledComponents/LinkStyled'
import './App.css'

function App(){
  const [items, setItems] = useLocalStorage('items', [])
  const [locations, setLocation] = useLocalStorage('locations', [])
  const [tempItem, setTempItem] = useLocalStorage('itemsTemp', [])

  const getLocationData = () => {
    axiosWithAuth()
    .get('/locations')
    .then((res) => {
      setLocation(res.data)
    })
    .catch((err) => console.log(err))
  }

  const getData = () => {
    axiosWithAuth()
    .get('/items')
    .then((res) => {
      setTempItem(res.data)
    })
    .catch((err) => console.log(err))
  }

  const getSaleData = () => {
    axiosWithAuth()
    .get('items-for-sale')
    .then((res) => {
      setItems(res.data)
    })
    .catch((err) => console.log(err))
  }

  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return(
    <Container className='container'>
      <header>
        <HeaderOne>African Marketplace</HeaderOne>
        <Router>
          <div>
            <Nav className='navigation'>
              <span>
                <StyledLink to='/'>Home</StyledLink>
              </span>
              <span>
                <StyledLink to='/About'>About</StyledLink>
              </span>
              <span>
                <StyledLink to='/Login'>Login</StyledLink>
              </span>
              <span>
                <StyledLink to='/Signup'>Signup</StyledLink>
              </span>
              <span>
                <StyledLink to='/' onClick={logout}>Logout</StyledLink>
              </span>
              <span>
                <StyledLink to='listings'>Listings</StyledLink>
              </span>
            </Nav>
            <Routes>
              <Route exact path='/' component={Home}></Route>
              <TokenRoute path='/Login' component={Login} />
              <Route path='/Signup' component={SignUpForm} />
              <Route path='About' component={About}></Route>
              <Route path='Login'component={Login}></Route> [X]
              <ItemContext.Provider 
              value={{items, getData, setItems, tempItem, setTempItem, locations, getLocationData, getSaleData}}>
                <ProtectedRoute exact path='/listings' component={ItemList} />
                <ProtectedRoute path='/addItem' component={ItemForm} />
                <ProtectedRoute path='details' component={Item} />  
              </ItemContext.Provider>
            </Routes>
          </div>
        </Router>
      </header>
    </Container>
  )
}

export default App