import React, { useState } from "react";

const Form = props => {
    const [member, setMember] = useState({name: "", email: "", role: ""});

    const changeHandler = event => {
        //console.log(event.target.value)
        setMember({...member, [event.target.name]: event.target.value});
    }

    const preventRefresh = event => {
        event.preventDefault();
        props.addMember(member);
        setMember({name: "", email: "", role: ""});
    };

    return(
        <form onSubmit={preventRefresh}>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" name="name" onChange={changeHandler} value={member.name} />
            <label htmlFor="email"> Email: </label>
            <input id="email" type="text" name="email" onChange={changeHandler} />
            <label htmlFor="role">  Role: </label>
            <input id="role" type="text" name="role" onChange={changeHandler} />
            <button type="submit">Add Member</button>
        </form>
    );
}

export default Form;