import React from 'react'

export default function ProductItem({ product, onDelete }){
  // TODO: render a Bootstrap card with product details and a Delete
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>

        <p className="card-text">
          <strong>Price:</strong> ${product.price}<br />
          <strong>Stock:</strong> {product.stock}
        </p>

        <p className="card-text">{product.description}</p>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
