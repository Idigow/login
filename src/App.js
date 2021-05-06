import React, {useState} from 'react';
import Form from "./Form";
import "./style.css";
function App(props) {
    let user ={
        login: 'admin',
        password: 'admin'
    }
    const [login, setLogin] = useState("");
    const handleChangeLogin = (e) => {
        setLogin(e.target.value)
    }
    const [pass, setPass] = useState("");
    const handleChangePass = (e) => {
        setPass(e.target.value)
    }
    let [text, setText] =useState("Войдите в учетную запись")
     const handleCkick = () =>{
        if (login === user.login && pass === user.password){
            setText("Вы успешно вошли!")
        }else if(login===""&& pass===""){
            setText("вы не ввели данные")
        }
        else {
            setText("не верный логин или пароль!")
        }
    }
    return (
        <div>
            <Form
                login={login}
                handleChangeLogin={handleChangeLogin}
                pass={pass}
                handleChangePass={handleChangePass}
                handleCkick={handleCkick}
                text={text}
            />
        </div>
    );
}

export default App;