import React, { useState } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SubHeader = (props) => {
    const [selectedOption, setSelectedOption] = useState("")
    const searchList = props.users.map((item) => {
        return {
            value: item._id,
            label: item.name
        }
    })

    return (
        <div className=" container mt-3">
            <div className="row">
                <div className="col-8  justify-content-end">
                    <Select
                        value={selectedOption}
                        options={searchList}
                        onChange={(selectedOption) => setSelectedOption(selectedOption)}
                        placeholder="Search..."
                        openMenuOnClick={false}
                    />
                </div>

                <div className="col-3 mr-2">
                    <Link to={`/user/${selectedOption.value}`}>
                        <button className="btn my-0 btn-secondary">Search</button>
                    </Link>
                </div>
            </div>
            <div className="col-md mt-3">
                <Link to={`/userForm/${null}`}>
                    <button className='btn  btn-primary' >
                        <FontAwesomeIcon icon={faPlus} color="white" className="mr-2" size="1x" />
                        Add new contact
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default SubHeader