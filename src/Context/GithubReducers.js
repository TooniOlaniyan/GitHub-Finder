const githubReducer = (state , action)=>{
    switch(action.type){
        case 'GET_USER':
            return{
                ...state,
                user: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return{
                ...state,
                loading: true

            }
        case 'SET_CLEAR':
            return{
                ...state , 
                user: []
            }
        case 'GET_PERSON':
            return{
                ...state,
                person: action.payload,
                loading: false
            }
        case 'GET_REPO':
            return{
                ...state,
                repos: action.payload,
                loading: false

            }


        default:
            return state
    }

}

export default githubReducer