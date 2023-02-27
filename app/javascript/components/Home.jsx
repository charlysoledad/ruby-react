import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => (
  <div className='vw-100 vh-100 primary-color d-flex align-items-center justify-content-center' >
    <h1>Recipes</h1>

    <Link to="/recipes" className='btn btn-lg custom-button' role="button">
      View Recipes
    </Link>
  </div>
);