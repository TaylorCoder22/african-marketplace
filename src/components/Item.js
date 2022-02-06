import React, {useContext} from 'react'
import ItemContext from '../context/itemContext'
import Container from './StyledComponents/ContainerStyled'
import HeaderTwo from './StyledComponents/H2Styled'
import {Button} from './StyledComponents/FormStyles'

const Item = (props) => {
    const {tempItem} = useContext(ItemContext)
    const name = tempItem.find((e) => e.id === props.item.item_id).item_name
    return(
        <Container>
            <HeaderTwo>{name}</HeaderTwo>
            <p>description: {props.item.item_listing_description}</p>
            <p>location: {props.item.locations_where_sold}</p>
            <p>price: {props.item.price}</p>
            <Button>Add to Cart</Button>
        </Container>
    )
}

export default Item