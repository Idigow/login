import React, {useState} from 'react';

function InputPass(props) {

    return (
        <div>
            <span>Введите пароль:</span>
            <input className="input" type="password" value={props.pass} onChange={props.handleChangePass}/>
        </div>
    );
}

export default InputPass;