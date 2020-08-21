import React from 'react'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
                <div className="navbar-brand">Navbar</div>
                <button className="btn inline text-white text-decoration-none" onClick={() => console.log("username clicked")}>
                    username
                </button>
            </nav>
        </div>
    )
}

export default Header
