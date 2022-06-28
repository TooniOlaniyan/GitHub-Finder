import React from 'react'
import {FaGithub} from 'react-icons/fa'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

function NavBar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-nuetral-content'>
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2">
                <FaGithub className='inline pr-2 text-3xl'/>
                <Link to= '/' className='align-middle font-bold text-lg'>
                {title}</Link>    
            </div>


        <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end">
                <Link to= '/' className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
                <Link to= '/about' className='btn btn-ghost btn-sm rounded-btn'>About</Link>

            </div>
            
            
            </div>  


        </div>

    </nav>
  )
}

NavBar.defaultProps={
    title:'GitHub Finder'
}
NavBar.propTypes={
    title: propTypes.string

    
}

export default NavBar