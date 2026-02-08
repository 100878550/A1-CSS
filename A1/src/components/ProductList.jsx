import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({ items, onDelete }){
  // TODO: if items is empty, show "No products available."
  // TODO: otherwise, map items to <ProductItem />
  return (
    <div>
      <h2 className="h5 mb-3">Products</h2>

      {items.length === 0 ? (
        <div className="alert alert-secondary">
          No products available.
        </div>
      ) : (
        items.map(item => (
          <ProductItem
            key={item.id}
            product={item}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  )
}
