import React from 'react'
import Table from './table'
import { useSelector } from 'react-redux'
import SubHeader from './subHeader'


function Home() {
    const users = useSelector(state => state.users)

    return (
        <div className=" items-center ">
            <SubHeader users={users} />
            <Table users={users} />
        </div>
    )
}

export default Home
