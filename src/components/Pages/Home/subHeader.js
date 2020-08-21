import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import SearchBar from './searchBar'

const SubHeader = () => {


    const [search, setSearch] = useState("")

    const users = useSelector(state => state.users)

    const searchSpace = (event) => {
        let keyword = event.target.value;
        setSearch(keyword)
    }

   
    const elementStyle = {
        border: 'solid',
        borderRadius: '10px',
        position: 'relative',
        left: '10vh',
        height: '3vh',
        width: '20vh',
        marginTop: '5vh',
        marginBottom: '10vh'
    }
    const items = users.filter((data) => {
       
        if (search === "") { return data }
      
        if (data.name.toLowerCase().includes(search.toLowerCase()) || data.email.toLowerCase().includes(search.toLowerCase())) {
            return data
        }
    })

    return (
        <div className="form-inline px-5 pt-3">
          
            <Link to={`/userForm/${null}`}>
                <button className='btn  btn-primary' >
                    <FontAwesomeIcon icon={faPlus} color="white" className="mr-2" size="1x" />
                Add new contact
            </button>
            </Link>
        </div>
    )
}

export default SubHeader
