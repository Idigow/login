import React, {useState} from 'react';

function InputLogin(props) {

    return (
        <div >
            <span>Введите логин:</span>
            <input className="input" type="text" value={props.login} onChange={props.handleChangeLogin}/>
        </div>
    );
}

export default InputLogin;