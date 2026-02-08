import React, { useState } from 'react'

// TODO: Use useState to manage a model with fields:
// { name: '', price: '', stock: '', description: '' }
// TODO: Create a validate() that sets an errors object and returns boolean:
// - All fields required
// - price: number with up to 2 decimals, >= 0
// - stock: non-negative integer
// TODO: On submit: console.log the model; if valid, call onSubmit(normalizedData)

export default function ProductForm({ onSubmit }){
  // const [model, setModel] = ...
  // const [errors, setErrors] = ...
  const [model,setModel] = useState({
    name: '',
    price: '',
    stock: '',
    description: ''
  })

  const [errors,setErrors] = useState({});

  function validate() {
    const errs = {}

    if (!model.name) errs.name = true
    if (!model.description) errs.description = true

    const price = Number(model.price)
    if (model.price === '' || isNaN(price) || price < 0) {
      errs.price = true
    }

    if (!/^\d+(\.\d{1,2})?$/.test(model.price)) {
      errs.price = true
    }

    const stock = Number(model.stock)
    if (model.stock === '' || !Number.isInteger(stock) || stock < 0) {
      errs.stock = true
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
}

  function handleSubmit(e){
    e.preventDefault()
    console.log('Submitting:', model)
    if (!validate()) return
    onSubmit({ 
      name: model.name, 
      price: Number(model.price), 
      stock: Number(model.stock), 
      description: model.description
     })
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>
      <div className="col-md-6">
        <label className="form-label">Product Name</label>
        {/* TODO: Controlled input (value, onChange) and inline error */}
        <input
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={model.name}
          onChange={e => setModel({ ...model, name: e.target.value })}
        />
      </div>
      <div className="col-md-3">
        <label className="form-label">Price</label>
        {/* TODO */}
        <input
          className={`form-control ${errors.price ? 'is-invalid' : ''}`}
          value={model.price}
          onChange={e => setModel({ ...model, price: e.target.value })}
        />

        <div className="form-text">Format: 12.34</div>
      </div>

      <div className="col-md-3">
        <label className="form-label">Stock</label>
        {/* TODO */}
        <input
          className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
          value={model.stock}
          onChange={e => setModel({ ...model, stock: e.target.value })}
        />

      </div>

      <div className="col-12">
        <label className="form-label">Description</label>
        {/* TODO */}
        <textarea
          className={`form-control ${errors.description ? 'is-invalid' : ''}`}
          rows="3"
          value={model.description}
          onChange={e => setModel({ ...model, description: e.target.value })}
        />
      </div>

      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">Save Product</button>
      </div>
    </form>
  )
}
