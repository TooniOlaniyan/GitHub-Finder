import React from 'react'
import {useState , useContext , useReducer} from 'react'
import GithubContext from '../../Context/GithubContext'
import alertContext from '../../Context/alert/AlertContext'


function UserSearch() {

    const [text , setText] = useState('')
    const {user , searchUser , handleClear} = useContext(GithubContext)

    const {setAlert} = useContext(alertContext)

    const handleChange = (e)=>{
        setText(e.target.value)

    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(text ===''){
            setAlert('please enter something', 'error')

        }else{
            searchUser(text)
            setText('')
        }

    }
 

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input value={text} onChange={handleChange} type="text" placeholder='Search' className="w-full pr-40 bg-gray-200 input input-lg text-black" />
                        <button type='Submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">GO</button>
                    </div>
                </div>
            </form>
        </div>
        {user.length > 0 && (
            <div>
            <button className="btn btn-ghost btn-lg" onClick={handleClear}>
                Clear
            </button>
        </div>
        )}

        
    </div>
  )
}

export default UserSearch 