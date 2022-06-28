import { createContext , useReducer } from "react";
import githubReducer from "./GithubReducers";

const GithubContext = createContext()

export const GithubProvider = ({children})=>{
    const initialState = {
        user : [],
        loading: false,
        repos: [],
        person: {}
    }
    const [state , dispatch] = useReducer(githubReducer , initialState)

    
    const searchUser = async (text)=>{
        const params = new URLSearchParams({
            q:text 
        })
        setLoading()
        const response = await fetch(`https://api.github.com/search/users?${params}`)
        const {items} = await response.json()
        dispatch({
            type: 'GET_USER',
            payload: items,
        })
    }
     const getUserRepo = async (login)=>{
        const params = new URLSearchParams({
            sort:'created',
            per_page: 10 
        })
        setLoading()
        const response = await fetch(`https://api.github.com/users/${login}/repos?${params}`)
        const data = await response.json()
        dispatch({
            type: 'GET_REPO',
            payload: data,
        })
    }


    // get individual profiles

    const getPerson = async (login)=>{
        setLoading()
        const response = await fetch(`https://api.github.com/users/${login}`)
        const data = await response.json()
        dispatch({
            type: 'GET_PERSON',
            payload: data,
        })
    }

    const setLoading = ()=> dispatch({
        type: 'SET_LOADING'
    })

    const handleClear = ()=> dispatch({
        type: 'SET_CLEAR'
    })




    return(
        <GithubContext.Provider value={{
            ...state,
            searchUser,
            handleClear,
            getPerson,
            getUserRepo

            

        }}>
            {children}
        </GithubContext.Provider>
    )

}
export default GithubContext