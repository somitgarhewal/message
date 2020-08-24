import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userLoggedIn } from '../redux/actions/userAction'

function Header() {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
                <div className="navbar-brand">Navbar</div>
                <button className="btn inline text-white text-decoration-none" onClick={(e) => dispatch(userLoggedIn(e.target.value))}>
                    <select className="mdb-select bg-primary border-none" >
                        <option value="null" disabled selected>Please Select User</option>
                        {users.map((item, index) =>
                            <option key={index} value={item._id} className="bg-light"> {item.name} </option>
                        )}
                    </select>
                </button>
            </nav>
        </div>
    )
}

export default Header
