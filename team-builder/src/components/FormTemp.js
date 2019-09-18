import React from "react";

const FormTemp = props =>{
    return(
        <div>
            {props.team.map(member =>(
                <div className="memberCard" key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default FormTemp;