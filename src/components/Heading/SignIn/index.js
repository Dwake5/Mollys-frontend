import React, { Component } from 'react'

import { Div, Button, Submit, Form, Input, Input2, NoMargin } from './style'

import { signin } from '../../../Services/api'

class SignIn extends Component {
    state = {
        formOpen: false,
        username: '',
        password: ''
    }

    capitalize = word => word[0].toUpperCase() +  word.slice(1)
    
    toggleForm = () => {
        this.setState(prevState => {
          return { formOpen: !prevState.formOpen };
        });
    };

    handleSignInButton = () => {
        signin(this.state.username, this.state.password)
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    this.props.signin(data)
                    this.setState({
                        formOpen: false
                    })
                }
            })
    }

    updateState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { toggleForm, handleSignInButton } = this
        const { formOpen, username, password } = this.state
        const { currentUser } = this.props
        return(
            <Div>
                {   currentUser &&
                    <NoMargin>Hello, {this.capitalize(currentUser)}</NoMargin> 
                }
                {   currentUser
                    ? <Button onClick={() => this.props.signout()}>Sign Out</Button>
                    : <Button large onDoubleClick={() => toggleForm()}></Button>
                }
                { formOpen &&
                    <Form>

                        Username:
                        <Input 
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.updateState}>    
                        </Input>

                        Password:
                        <Input2 
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.updateState}>
                        </Input2>

                        <Submit onClick={() => handleSignInButton ()}>Submit</Submit>
                    </Form>
                }
            </Div>
        )
    }
        
}

export default SignIn