import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from "react-number-format";
import { addUser } from "../../../redux/actions/userAction"
import { updateUser } from "../../../redux/actions/userAction"

const AddNewUser = (props) => {

   const users = useSelector(state => state.users)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        fatherName: "",
        motherName: "",
        contactNo: "",
        company: "",
        dob: ""
    })

    const user = users.find((item) => item._id == props.match.params._id)

    useEffect(() => {

        if (user !== undefined) {
            setFormData(user)
        }

    }, []);


    const [error, setError] = useState({
        name: "",
        email: "",
        fatherName: "",
        motherName: "",
        contactNo: "",
        company: "",
        dob: ""
    });

    const dispatch = useDispatch();

    const { register } = useForm({
        defaultValues: {},
    });

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const handleSubmit = () => {
        if (formData.name.length < 5) {
            error.name = "Too short"
        }
        if (!emailRegex.test(formData.email)) {
            error.email = "invalid email"
        }
        if (formData.contactNo.length !== 11) {
            error.contactNo = "invalid No"
        }
        if (formData.fathername.length < 5) {
            error.fatherName = "Too short"
        }
        if (formData.mothername.length < 5) {
            error.motherName = "Too short"
        }
        if (formData.company.length == 0) {
            error.company = "This field Required"
        }
        if (formData.dob.length !== 10) {
            error.dob = "please check dob"
        }
        console.log(formData)
        setError({ ...error })
        setTimeout(() => setError({
            name: "",
            email: "",
            fatherName: "",
            motherName: "",
            contactNo: "",
            company: "",
            dob: ""
        }), 3000)

        if (error.name === "" && error.email === "" && error.fatherName === "" && error.motherName === "" && error.contactNo === "" && error.company === "" && error.dob === "") {
            if (user !== undefined) {
                dispatch(updateUser(props.match.params._id, formData))
            }
            else {
                if(users.find((item)=> item.email === formData.email)){
                   return alert("user with this email already exists")
                }
                dispatch(addUser(formData))
            }

            setFormData({
                name: "",
                email: "",
                fathername: "",
                mothername: "",
                contactNo: "",
                company: "",
                dob: ""
            })
        }

    }

    return (
        <div className="d-flex flex-wrap justify-content-center">

            <div className=' border rounded m-5 p-5 bg-light'>
                <h2 className="p-3 text-dark">Add New User</h2>
                <div className="sm:p-3  ">
                    Name:
                <input className='form-control' type='text' placeholder="Name" name="name" value={formData.name} onChange={handleInput} />
                    {error && <p className="text-danger  text-center">{error.name}</p>}
                </div>
                <div className="sm:p-3">
                    email :
                <input className='form-control' type='email' placeholder="email" name="email" value={formData.email} onChange={handleInput} />
                    {error && <p className="text-danger  text-center">{error.email}</p>}
                </div>
                <div className="sm:p-3">
                    Father's Name :
                <input className='form-control' type='text' placeholder="Father's Name" name="fathername" value={formData.fathername} onChange={handleInput} />
                    {error && <p className="text-danger  text-center">{error.fatherName}</p>}
                </div>
                <div className="sm:p-3">
                    Mother's Name :
                <input className='form-control' type='text' placeholder="Mother's Name" name="mothername" value={formData.mothername} onChange={handleInput} />
                    {error && <p className="text-danger  text-center">{error.motherName}</p>}
                </div>
                <div className="sm:p-3">
                    Contact No :
                    <NumberFormat
                        value={formData.contactNo}
                        format="##### #####"
                        mask=""
                        getInputRef={register({ required: true, minLength: 11 })}
                        onChange={handleInput}
                        name="contactNo"
                        placeholder="Contact number"
                        type="tel"
                        inputMode="numeric"
                        className="form-control"
                    />
                    {error && <p className="text-danger text-center">{error.contactNo}</p>}
                </div>
                <div className="sm:p-3">
                    D O B :
                    <NumberFormat
                        value={formData.dob}
                        format="####-##-##"
                        mask=""
                        getInputRef={register({ required: true, minLength: 10 })}
                        onChange={handleInput}
                        name="dob"
                        placeholder="yyyy-mm-dd"
                        type="tel"
                        inputMode="numeric"
                        className="form-control"
                    />
                    {error && <p className="text-danger text-center">{error.dob}</p>}
                </div>
                <div className="sm:p-3">
                    Company's Name :
                <input className='form-control' type='text' placeholder="Company's Name" name="company" value={formData.company} onChange={handleInput} />
                    {error && <p className="text-danger  text-center">{error.company}</p>}
                </div>
                <button className='btn btn-md btn-dark text-white  p-2 mt-3' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default AddNewUser