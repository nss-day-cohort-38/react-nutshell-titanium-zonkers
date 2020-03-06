import React, { useEffect, useState } from "react"
import { Card, Form, Input, Button } from 'semantic-ui-react'
import SignUpModal from "./SignUpModal"
import "./Auth.css"
import dbAPI from "../../modules/dbAPI"


const LoginPage = (props) => {

    const [credentials, setCredentials] = useState({is_active: true})
    const [newCredentials, setNewCredentials] = useState({ first_name: "", last_name: "", username: "", email: "", password: "", is_active: true })

    const [ modalOpen, handleModal ] = useState(false);

    const toggleModal = () => {
        handleModal(!modalOpen)
    };

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
      };
      
      const handleSignupFieldChange = (evt) => {
        const stateToChange = { ...newCredentials };
        stateToChange[evt.target.id] = evt.target.value;
        setNewCredentials(stateToChange);
      };

    async function handleLogin(e) {
        e.preventDefault();
        await dbAPI.getUsers().then(users => {
            const userObject = users.filter(user => (credentials.email === user.email && credentials.password === user.password));
            if(userObject.length !== 1) {
                window.alert('Wrong email or password. Please try again. If you do not have an account, click the sign up button to create one.');
            } else {
                sessionStorage.setItem('userId', JSON.stringify(userObject[0].id));
                // dbAPI.patchObjectByResource('users', userObject[0].id, { "is_active": true })
            };
        });
        props.history.push('/')
    };

    async function handleSignup(e) {
        e.preventDefault();
        const password1 = document.getElementById('password').value
        const password2 = document.getElementById('password-2').value

        await dbAPI.getUsers().then(users => {
            const emails = users.filter(user => (newCredentials.email === user.email));
            const usernames = users.filter(user => (newCredentials.username === user.username));
            if (emails.length !== 0) {
                window.alert('Email already taken! Please try again.');
            } else if (usernames.length !== 0)  {
                window.alert('Username already taken! Please try again.');
            } else if (newCredentials.first_name.length < 2 ){
                window.alert('First name must be at least two characters.')
            } else if (newCredentials.last_name.length < 1 ){
                window.alert('Please enter last name or initial.')
            } else if (newCredentials.username.length < 3 ){
                window.alert('Username must be at least 3 characters long.')
            } else if (newCredentials.username.includes('@' || ':' || ';' || '#' || ',' || '/' || '%' || '^' || '&' ) === true ){
                window.alert('Username cannot include any special characters.')
            } else if (newCredentials.password.length < 3 ){
                window.alert('Password must be at least 3 characters long.')
            } else if (newCredentials.email.includes("@") === false ||
            newCredentials.email.includes(".com" || ".net" || ".org") === false){
                window.alert('Please enter valid email address.')
            } else if (password1 !== password2) {
                window.alert('Please make sure the passwords match.')
            } else {
                dbAPI.postObjectByResource('users', newCredentials)
                    .then(window.alert('Account creation successful! Now, please login.'))
                    .then(toggleModal())
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
                    <div className="login-form-buttons">
                        <Form.Field
                            id='form-button-control-public'
                            control={Button}
                            content='Login'
                            onClick={handleLogin}
                        />
                        <SignUpModal handleSignupFieldChange={handleSignupFieldChange} handleSignup={handleSignup} modalOpen={modalOpen} toggleModal={toggleModal} {...props} />
                    </div>
                </Form>
            </Card.Content>
        </Card>
    );

}




export default LoginPage;