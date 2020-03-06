import React, { useState } from "react"
import { Button, Header, Modal, Form, Input } from 'semantic-ui-react'

const SignUpModal = ({handleFieldChange, handleSignup}, props) => {

    const [ modalOpen, handleModal ] = useState(false);

    const toggleModal = () => {
        handleModal(!modalOpen)
    };

    const createAndClose = (e) => {
        handleSignup(e)
        toggleModal()
    }

    return (
        <Modal id="signup-modal" open={modalOpen} trigger={<Button onClick={toggleModal}>Sign Up</Button>}>
            <Modal.Header>Create a New Account!</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='first_name'
                            control={Input}
                            label='First name'
                            placeholder='First name'
                            onChange={handleFieldChange}
                        />
                        <Form.Field
                            id='last_name'
                            control={Input}
                            label='Last name'
                            placeholder='Last name'
                            onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <Form.Field
                            id='username'
                            control={Input}
                            label='Username'
                            placeholder='Username'
                            onChange={handleFieldChange}
                        />
                    <Form.Field
                        id='email'
                        control={Input}
                        label='Email'
                        placeholder='email'
                        onChange={handleFieldChange}
                    />
                    <Form.Field>
                        <label>Enter Password</label>
                        <Input id="password" type='password' onChange={handleFieldChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Renter Password</label>
                        <Input id="password-2" type='password' />
                    </Form.Field>
                </Form>
                <Button onClick={createAndClose}>Create Account</Button>
            </Modal.Content >
        </Modal>
    );
};

export default SignUpModal;
