import React, {useContext, useEffect} from 'react'
import {useForm} from '../hooks/useForm'
import ItemContext from '../context/itemContext'
import {axiosWithAuth} from '../helpers/axiosWithAuth'
import Container from './StyledComponents/ContainerStyled'
import HeaderOne from './StyledComponents/H1Styled'
import {Form, Button, Label, Input} from './StyledComponents/FormStyles'
import StyledLink from './StyledComponents/LinkStyled'
import Select from './StyledComponents/SelectStyled'

const ItemForm = () => {
    const {items, setItems, tempItem, setTempItem} = useContext(ItemContext)
    const initialValues = {
        name: '',
        item_listing_description: '',
        locations_where_sold: '',
        price: 0,
        category: '',
        qty: 0
    }
    console.log(tempItem.slice(-1)[0].id)

    const [value, handleChanges] = useForm(initialValues)
    const sale = () => {
        const newItemForSale = {
            item_id: tempItem.slice(-1)[0].id,
            item_listing_description: value.description.trim(),
            locations_where_sold: value.location.trim(),
            price: Number(value.price),
            user_id: tempItem[tempItem.length - 1].user_id
        }

        axiosWithAuth()
        .post('/items-for-sale', newItemForSale)
        .then((res) => {
            console.log('Happy path!: Item Submitted:', res.data)
            setItems([...items, newItemForSale])
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const confirm = () => {
        if(window.confirm('Are all details for your item correct?')){
            sale()
            window.alert('Listing has been put up')
            window.location.href('/listings')
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            item_name: value.name,
            description: value.description.trim(),
            category_id: 11,
            user_id: 5,
            location_id: 1
        }

        axiosWithAuth()
        .post('/items', newItem)
        .then((res) => {
            console.log('Item Submitted:', res.data)
            setTempItem([...tempItem, newItem])
            confirm()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {})

    return(
        <>
        <div className='background-itemForm'>
            <Container className='itemForm-container'>
                <Form className='itemForm' onSubmit={onFormSubmit}>
                    <div className='itemForm-title'>
                        <HeaderOne>Items</HeaderOne>
                        <p>Fill out form to put items up for sale</p>
                    </div>
                    <Label htmlFor='name'>
                        Product name:
                        <Input type='text' name='name' placeholder='Products Name' onChange={handleChanges} value={value.name} label='Product name' />
                    </Label>
                    <Label htmlFor='name'>
                        Description:
                        <Input type='text' name='description' placeholder='Product description' onChange={handleChanges} value={value.item_listing_description} label='product description' />
                    </Label>
                    <Label htmlFor='name'>
                        Price:
                        <Input type='text' name='price' placeholder='Seller price' onChange={handleChanges} value={value.price} />
                    </Label>
                    <Label htmlFor='name'>
                        Category:
                        <Select value={value.category} onChange={handleChanges} name='category' id='category'>
                            <option value='fruits'>Fruits</option>
                            <option value='vegetables'>Vegetables</option>
                            <option value='peas'>Peas</option>
                            <option value='dairy'>Dairy</option>
                            <option value='beans'>Beans</option>
                            <option value='animal_products'>Animal Products</option>
                            <option value='cereals-maize'>Cereals-Maize</option>
                            <option value='cereals-rice'>Cereals-Rice</option>
                            <option value='cereals-other'>Cereals-Other</option>
                            <option value='roots_tubers'>Roots & Tubers</option>
                            <option value='seeds_nuts'>Seeds & Nuts</option>
                            <option value='other'>Other</option>
                        </Select>
                    </Label>
                    <Label htmlFor='name'>
                        Location:
                        <Input type='text' name='location' placeholder='Location' onChange={handleChanges} value={value.locations_where_sold} />
                    </Label>
                    <Label htmlFor='name'>
                        Qty:
                        <Input type='number' name='qty' placeholder='Qty' onChange={handleChanges} value={value.qty} />
                    </Label>
                    <div className='itemForm-slider'>
                        <div className='slider-container'></div>
                    </div>
                    <br />
                    <br />
                    <Button type='submit' id='submitBtn'>
                        Submit
                    </Button>
                    <StyledLink to='/listings'>Go Back</StyledLink>
                </Form>
            </Container>
        </div>
        </>
    )
}

export default ItemForm