import React, { createContext } from 'react'

import all_products from '../../public/images/all_products'
import Popular_products from '../../public/images/Popular_products'

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {

  // Merge all_products and Item_product for global access
  const merged_products = [...all_products, ...Popular_products];
  const contextValue = { all_products: merged_products };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
