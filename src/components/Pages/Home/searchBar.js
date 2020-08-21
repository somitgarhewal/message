import React, { useState } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

const SearchBar = (props) => {
    const [selectedOption, setSelectedOption] = useState("")
    const searchList = props.users.map((item) => {
        return {
            value: item._id,
            label: item.name
        }
    })

    return (
        <div className=" container form-inline">
            <div className="col-5">
                <Select
                    value={selectedOption}
                    options={searchList}
                    onChange={(selectedOption) => setSelectedOption(selectedOption)}
                    placeholder="Search..."
                    openMenuOnClick={false}
                />
            </div>
            <Link to={`/user/${selectedOption.value}`}>
                <button className="btn my-0 btn-secondary">Search</button>
            </Link>
        </div>
    )
}

export default SearchBar