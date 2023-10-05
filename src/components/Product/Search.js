import React, { Fragment } from 'react'
import './Search.css'

const Search = ( { history }) => {

    const [ keyword , setKeyword ] = React.useState("")

    function searchSubmitHandler(e){
        e.preventDefault()

        if(keyword.trim()){
            history.push(`/products/${keyword}`)
        }
        else{
            history.push("/products")
        }
    }
  return (
    <Fragment>
        <form className='searchBox' onSubmit={searchSubmitHandler}>
            <input 
                type='text'
                placeholder='Search A Product ... ' 
                onChange={ (e) => setKeyword(e.target.value)}/>

        </form>
    </Fragment>
  )
}

export default Search