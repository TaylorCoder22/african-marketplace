import React, {useContext, useEffect} from 'react'
import ItemContext from '../context/itemContext'
import Item from './Item'
import StyledLink from './StyledComponents/LinkStyled'

const ItemList = () => {
    const {items, getData, getSaleData, tempItem} = useContext(ItemContext)

    useEffect(() => {
        getData()
        getSaleData()
    }, [getData, getSaleData])
   
    console.log(items)
    console.log(tempItem)

    return(
        <>
        <StyledLink to='/addItem'>Add Listing</StyledLink>
        {items.map((item, i) => {
            <Item key={i} item={item} />
            return items
        })}
        </>
    )
}

export default ItemList