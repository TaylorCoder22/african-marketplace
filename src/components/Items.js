import React, {useState} from 'react'
import '../styles/SignUpForm.css'
import Container from './StyledComponents/ContainerStyled'
import HeaderOne from './StyledComponents/H1Styled'
import {Button, Label, Input} from './StyledComponents/FormStyles'

const ItemForm = () => {
    const [itemFormValues, setItemFormValues] = useState({
        productName: '',
        description: '',
        seller_price: 0,
        qty: 0
    })

    const inputChange = (e) => {
        const {name, value} = e.target
        console.log(`name: ${name}, value: ${value}`)
        const inputValue = value
        console.log('inputValue: ', inputValue)
        setItemFormValues({...itemFormValues, [name]: inputValue})
    }

    const onFormSubmit = (e) => {
        console.log('Item submitted and Displayed on Next Line')
        e.preventDefault()
    }

    return(
        <>
        <div className='background-itemForm'>
            <Container className='itemForm-container'>
                <form className='itemForm' onSubmit={onFormSubmit} className='container'>
                    <div className='itemForm-title'>
                        <HeaderOne>Items</HeaderOne>
                        <p>Fill out form to put items up for sale</p>
                    </div>
                    <Label htmlFor='name'>
                        Product Name:
                        <Input type='text' name='productName' placeholder='Products Name' onChnage={inputChange} value={itemFormValues.productName} label='Product name' />
                    </Label>
                    <Label htmlFor='name'>
                        Product:
                        <Input type='text' name='description' placeholder='Product description' onChange={inputChange} value={itemFormValues.description} label='product description' />
                    </Label>
                    <Label htmlFor='name'>
                        Price:
                        <Input type='text' name='seller_price'placeholder='Seller price' onChange={inputChange} value={itemFormValues.seller_price} />
                    </Label>
                    <Label htmlFor='name'>
                        Qty:
                        <Input type='text' name='qty' placeholder='Qty' onChange={inputChange} value={itemFormValues.qty} />
                    </Label>
                    <div className='itemForm-slider'>
                        <div className='slider-container'></div>
                    </div>
                    <br />
                    <br />
                    <Button type='submit' id='submitBtn'>
                        Submit
                    </Button>
                </form>
            </Container>
        </div>
        </>
    )
}

export default ItemForm