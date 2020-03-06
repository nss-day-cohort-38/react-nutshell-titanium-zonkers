import React, { useEffect, useState } from "react"
import { Card, Form, Input, Button } from 'semantic-ui-react'
import SignUpModal from "./SignUpModal"
import "./Auth.css"
import dbAPI from "../../modules/dbAPI"


const LoginPage = (props) => {

    const [credentials, setCredentials] = useState({is_active: false})

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
      };
      
    async function handleLogin(e) {
        e.preventDefault();
        await dbAPI.getUsers().then(users => {
            const userObject = users.filter(user => (credentials.email === user.email && credentials.password === user.password));
            if(userObject.length !== 1) {
                window.alert('Wrong email or password! Please try again.');
            } else {
                sessionStorage.setItem('user', JSON.stringify(userObject[0]));
                dbAPI.patchObjectByResource('users', userObject[0].id, { "is_active": true })
            };
        });
        props.history.push('/')
    };

    async function handleSignup(e) {
        e.preventDefault();
        await dbAPI.getUsers().then(users => {
            const emails = users.filter(user => (credentials.email === user.email));
            const usernames = users.filter(user => (credentials.username === user.username));
            if (emails.length !== 0) {
                window.alert('Email already taken! Please try again.');
            } else if (usernames.length !== 0)  {
                window.alert('Username already taken! Please try again.');
            } else {
                dbAPI.postObjectByResource('users', credentials)
            };
        });
        console.log(props)
        console.log('click!')
        props.history.push('/')
    }


    useEffect(()=>{
        console.log(credentials)
    },[credentials])

    return (

        <Card id="login-form-card">
            <Card.Content>
                <Card.Header>Login</Card.Header>
            </Card.Content>
            <Card.Content>

                <Form>
                    <Form.Field
                        id='email'
                        control={Input}
                        label='Email'
                        placeholder='email'
                        onChange={handleFieldChange}
                    />
                    <Form.Field >
                        <label>Password</label>
                        <Input id="password" type='password' placeholder="password" onChange={handleFieldChange}/>
                    </Form.Field>
                    <div id="login-form-buttons">
                        <Form.Field
                            id='form-button-control-public'
                            control={Button}
                            content='Login'
                            onClick={handleLogin}
                        />
                        <SignUpModal handleFieldChange={handleFieldChange} handleSignup={handleSignup} {...props} />
                    </div>
                </Form>
            </Card.Content>
        </Card>
    );

}




export default LoginPage;