import React from 'react';
import InputLogin from "./InputLogin";
import InputPass from "./InputPass";
import Button from "./Button";

function Form(props) {
    return (
        <div className="form">
            <InputLogin
                login={props.login}
                handleChangeLogin={props.handleChangeLogin}
            />
            <InputPass
                pass={props.pass}
                handleChangePass={props.handleChangePass}
            />
            <div className="text">
                {props.text}
            </div>
            <Button handleCkick={props.handleCkick}/>
        </div>
    );
}

export default Form;