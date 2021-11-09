import React from 'react'

import { useHistory } from 'react-router-dom'; // import react-router-dom

export default function Homepage() {

  const { push } = useHistory(); 

  const routeToLogin = () => {
    push("/login"); // push
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
        alt='a pic '
      />
      <button
        onClick={routeToLogin}
        className='md-button login'
      >
        login
      </button>
    </div>
  )
}
