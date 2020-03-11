import React from "react"
import { Button, Modal, Form, Input } from 'semantic-ui-react'

const SignUpModal = (props) => {


    return (
        <Modal id="signup-modal" open={props.modalOpen} trigger={<Button onClick={props.toggleModal}>Sign Up</Button>}>
            <Modal.Header>Create a New Account!</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='first_name'
                            control={Input}
                            label='First name'
                            placeholder='First name'
                            onChange={props.handleSignupFieldChange}
                        />
                        <Form.Field
                            id='last_name'
                            control={Input}
                            label='Last name'
                            placeholder='Last name'
                            onChange={props.handleSignupFieldChange}
                        />
                    </Form.Group>
                    <Form.Field
                            id='username'
                            control={Input}
                            label='Username'
                            placeholder='Username'
                            onChange={props.handleSignupFieldChange}
                        />
                    <Form.Field
                        id='email'
                        control={Input}
                        label='Email'
                        placeholder='email'
                        onChange={props.handleSignupFieldChange}
                    />
                    <Form.Field>
                        <label>Enter Password</label>
                        <Input id="password_1" type='password' onChange={props.handleSignupFieldChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Renter Password</label>
                        <Input id="password_2" type='password' onChange={props.handleConfirmedPassword} />
                    </Form.Field>
                    <Form.Field>
                        <label>Image Url</label>
                        <Input id="image" onChange={props.handleSignupFieldChange} placeholder='image url here'/>
                    </Form.Field>
                </Form>
                <div className="login-form=buttons">
                <Button onClick={props.handleSignup}>Create Account</Button>
                <Button onClick={props.toggleModal}>Cancel</Button>
                </div>
            </Modal.Content >
        </Modal>
    );
};

export default SignUpModal;
