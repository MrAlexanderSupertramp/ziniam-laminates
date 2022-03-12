import HeaderContext from "../../context/HeaderContext"
import { useState } from 'react'

function ContextWrapper({ children, products }) {

    // console.log(products)

    const menuItemProducts = products

    return (
        <HeaderContext.Provider value={{ menuItemProducts }}>
            {children}
        </HeaderContext.Provider>
    )

}

export default ContextWrapper

