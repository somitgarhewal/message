import React from 'react'
import { useSelector } from 'react-redux';

const User = (props) => {
  const user = useSelector(state => state.users.find((item) => item._id == props.match.params._id))
  return (
    <div>
      <div className="container mr-3">
        <div className="row my-2 ">
          <div className="col-lg-8 order-lg-2">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a href=""
                  data-target="#profile"
                  data-toggle="tab"
                  className="nav-link active"
                >
                  Profile
                </a>
              </li>
            </ul>
            {!(user) ? 'Loading...' : (
              <div className="tab-content py-4">
                <div className="tab-pane active" id="profile">
                  <h5 className="mb-3">{user.name}</h5>
                  <div className="row">
              
                    <div className="col-md-10">
                      <h5 className="mt-2">
                        Details
                    </h5>
                      <table className="table table-sm table-hover table-striped">
                      <div  className="col-2"></div>
                        <tbody className="col-8">
                         
                          <tr> 
                            <td className="row">
                              <strong className="col">UserID</strong>
                              <strong className="col">{` ${user._id}`}</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="row">
                              <strong className="col">Name</strong>
                              <strong className="col">{` ${user.name}`}</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="row">
                              <strong className="col">Email</strong>
                              <strong className="col">{` ${user.email}`}</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="row">
                              <strong className="col">Contact</strong>
                              <strong className="col">{` ${user.contactNo}`}</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="row">
                              <strong className="col">Father's Name</strong>
                              <strong className="col">{` ${user.fathername}`}</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="row">
                              <strong className="col">Mother's Name</strong>
                              <strong className="col">{` ${user.mothername}`}</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="row">
                              <strong className="col">DOB</strong>
                              <strong className="col">{` ${user.dob.toString().slice(0, 10)}`}</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default User