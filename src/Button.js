import React from 'react';

function Button(props) {
    return (
        <div>
            <button className="button" onClick={props.handleCkick}>Войти</button>
        </div>
    );
}

export default Button;