import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux'

const Table = (props) => {

    const activeUser = useSelector(state => state.loggedInUser)
    const users = props.users.filter(item => item._id !== activeUser)

    return (<div className="row ">
        <div className="col table-responsive ">
            <center>
                <table className="table   mt-5 table-bordered table-striped table-hover">
                    <thead className="bg-dark textHeading">
                        <tr className="text-center text-white">
                            <th>Name</th>
                            <th>E-mail id</th>
                            <th>Company</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((element, index) =>
                            <tr key={index}>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td>{element.company}</td>
                                <td className="text-center">
                                    <Link to={`/user/${element._id}`}>
                                        <button className="btn" >
                                            <FontAwesomeIcon icon={faEye} color="grey" className="mr-2" size="lg" />
                                        </button>
                                    </Link>
                                </td>
                                <td className="text-center">
                                    <Link to={`/userForm/${element._id}`}>
                                        <button className="btn" >
                                            <FontAwesomeIcon icon={faEdit} color="grey" className="mr-2" size="lg" />
                                        </button>
                                    </Link>
                                </td>
                                <td className="text-center">
                                    <Link to={`/chatWindow/${element._id}`}>
                                        <button className="btn" >
                                            <FontAwesomeIcon icon={faComment} color="grey" className="mr-2" size="lg" />
                                        </button>
                                    </Link>

                                </td>
                            </tr>)}
                    </tbody>
                </table >
            </center>

        </div>
    </div>
    )
}

export default Table