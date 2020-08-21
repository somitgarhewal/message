import React from 'react'
import SubHeader from './subHeader'
import Table from './table'
import { useSelector } from 'react-redux'
import SearchBar from './searchBar'

function Home() {
    const users = useSelector(state => state.users)

    return (
        <div className="flex p-3 items-center ">
            <SearchBar users={users} />
            <SubHeader />
            <Table users={users} />
            
        </div>
    )
}

export default Home
