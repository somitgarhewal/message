import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment, faEdit } from "@fortawesome/free-solid-svg-icons";

const Table = () => {

    const users = useSelector(state => state.users)

    return (
        <table className="table m-3 mt-5 container table-bordered table-striped table-hover">
            <thead className="bg-dark textHeading">
                <tr className= "text-center text-white">
                    <th>Name</th>
                    <th>E-mail id</th>
                    <th>Company</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map(element =>
                    <tr>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.company}</td>
                        <td className= "text-center">
                            <Link to={`/user/${element._id}`}>
                                <button className="btn" >
                                    <FontAwesomeIcon icon={faEye} color="grey" className="mr-2" size="lg" /> 
                                </button>
                            </Link>
                        </td>
                        <td className= "text-center">
                            <Link to={`/userForm/${element._id}`}>
                                <button className="btn" >
                                    <FontAwesomeIcon icon={faEdit} color="grey" className="mr-2" size="lg" /> 
                                </button>
                            </Link>
                        </td>
                        <td className= "text-center">
                            <button className="btn" >
                                <FontAwesomeIcon icon={faComment} color="grey" className="mr-2" size="lg" />
                            </button>
                        </td>
                    </tr>)}
            </tbody>
        </table>
    )
}


export default Table