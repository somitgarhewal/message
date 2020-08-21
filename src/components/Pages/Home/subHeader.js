import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';

const SubHeader = () => {

   
    return (
        <div className="form-inline px-5 pt-3 justify-content-between">
            <div>
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn my-0 btn-secondary" >Search</button>
            </div>
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
