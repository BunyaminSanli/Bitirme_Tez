import React, {useState} from "react";
import {FormControl, InputLabel, Input, Button, FormHelperText} from "@material-ui/core"
import { useHistory } from "react-router";
import { PostWithoutAuth } from "../../services/HttpService";
function Auth() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory();
    const handleUsername = (value) => {
        setUsername(value)
    } 

    const handlePassword = (value) => {
        setPassword(value)
    } 

    const sendRequest = (path) => {
        PostWithoutAuth(("/auth/"+path), {
            userName : username, 
            password : password,
          })
          .then((res) => res.json())
          .then((result) => {localStorage.setItem("tokenKey",result.accessToken);
                            localStorage.setItem("refreshKey",result.refreshToken);
                            localStorage.setItem("currentUser",result.userId);
                            localStorage.setItem("userName",username)})
          .catch((err) => console.log(err))
    }

    const handleButton = (path) => {
        sendRequest(path)
        setUsername("")
        setPassword("")
        console.log(localStorage,"---------------------------------------")
        history.go("/auth")
    }

    return(
        <FormControl>
            <InputLabel>Kullanıcı Adı</InputLabel>
            <Input  onChange = {(i) => handleUsername(i.target.value)}/>
            <InputLabel  style={{top: 80}}>Şifre</InputLabel>
            <Input  style={{top: 40}}
            onChange = {(i) => handlePassword(i.target.value)}/>
            <Button variant = "contained"
                style = {{marginTop : 60,
                background :'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                color : 'white'}}
                onClick= {() => handleButton("register")}>Kayıt Ol</Button>
            <FormHelperText style={{margin:20}}>Hali Hazırda Kayıtlı mısınız?</FormHelperText>
            <Button variant = "contained"
                style = {{
                background :'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                color : 'white'}}
                onClick={() => handleButton("login")}>Giriş Yap</Button>
            
        </FormControl>
    )
}

export default Auth;