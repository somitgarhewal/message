import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, FormControl, Input } from '@material-ui/core'
import { updateUser } from '../../../redux/actions/userAction'
import Message from './message';
import { Redirect } from 'react-router-dom';


const ChatWindow = (props) => {
    const [input, setInput] = useState("")
    const loggedIn = useSelector(state => state.loggedInUser)
    const toUser = useSelector(state => state.users.find((item) => item._id == props.match.params._id))
    const [user, setuser] = useState(toUser)
    const fromUser = useSelector(state => state.users.find((item) => item._id == loggedIn))
    const [currentUser, setCurrentUser] = useState(fromUser)
    const [isSend, setIsSend] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(1, 1)
        if (isSend) {
            dispatch(updateUser(props.match.params._id, user))
            dispatch(updateUser(fromUser._id, currentUser))
            setIsSend(false)
        }
    })

    const handleSend = (e) => {
        e.preventDefault()
        setuser({ ...user, message: [...user.message, { from: loggedIn, to: null, at: new Date(), msg: input }] })
        setCurrentUser({ ...currentUser, message: [...currentUser.message, { from: null, to: toUser._id, at: new Date(), msg: input }] })
        setTimeout(() => setInput(""), 100)
        setIsSend(true)
    }

    return (
        <>
            {!loggedIn ?
                <>
                    {alert("Please login to send message")}
                    <Redirect to='/' />
                </> :
                <div className="flex-wrap bg-dark">
                    <div className="py-2 bg-light pl-2 mb-2" >
                        <h1>{toUser.name}</h1>
                    </div>
                    <div>
                        {fromUser.message.filter((message) =>
                            message.from === toUser._id || message.to === toUser._id
                        ).map(item => <div className="container w-75 h-100">
                            <Message message={item} />
                        </div>
                        )
                        }
                    </div>
                    <form onSubmit={handleSend} className="mb-2 bg-dark">
                        <FormControl className="fixed-bottom position-fixed bottom position-sticky form-control form-inline">
                            <Input className="w-75" placeholder="enter message" value={input} onChange={(e) => setInput(e.target.value)} />
                            <Button type="submit" disabled={!input} className="btn btn-sm col-3 btn-dark" >Send</Button>
                        </FormControl>
                    </form>
                </div>
            }
        </>
    )
}

export default ChatWindow