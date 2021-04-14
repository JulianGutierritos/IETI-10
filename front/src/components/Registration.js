import React, {Component} from 'react';
import './TodoApp.css';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { history } from './../App';

export class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', email: '', password : '', password2: ''};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePassword2Change = this.handlePassword2Change.bind(this);
        this.handleSubmitResgistration = this.handleSubmitResgistration.bind(this);
        this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this);
    }


    render() {

        return (
            <Box >
                <form className="todo-form" hidden={this.state.hiddenForm}>
                <Card>
                    <CardContent>
                    { localStorage.isLoggedIn === "true" ?
                    <h3>Edit User</h3> :
                    <h3>New User</h3> }
                    <label htmlFor="name" className="right-margin">
                        Full Name:
                    </label>

                    <Input
                        id="Fullname"
                        onChange={this.handleNameChange}
                        value={this.state.name}>
                    </Input>

                    <br/>
                    <br/>
                    <label htmlFor="status" className="right-margin">
                        Email:
                    </label>

                    <Input
                        id="Email"
                        type="email"
                        onChange={this.handleEmailChange}
                        value={this.state.email}>
                    </Input>

                    <br/>
                    <br/>
                    <label htmlFor="status" className="right-margin">
                        Password:
                    </label>

                    <Input
                        name="password"
                        type="password"
                        onChange={this.handlePasswordChange}
                        value={this.state.password}>
                    </Input>

                    <br/>
                    <br/>
                    <label htmlFor="status" className="right-margin">
                        Repeat Password:
                    </label>

                    <Input
                        name="password2"
                        type="password"
                        onChange={this.handlePassword2Change}
                        value={this.state.password2}>
                    </Input>

                        <br/>
                        <br/>
                        { localStorage.isLoggedIn === "true" ?
                        <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit"
                        onClick={this.handleSubmitUpdate}
                    >
                        Send
                       </Button>:
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            onClick={this.handleSubmitResgistration}
                        >
                            Send
                        </Button>}

                        <br/>
                        <br/>
                        { localStorage.isLoggedIn === "true" ?
                        <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit"
                        onClick={this.handleRedirectApp}
                    >
                        Back to App
                        </Button>
                        : <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            onClick={this.handleRedirectSignIn}
                        >
                            Back to Sign in
                        </Button>}
                    </CardContent>
                </Card>
                </form>
            </Box>
        );
    }

    handleEmailChange(e){
        this.setState({
            email : e.target.value
        });
    }

    handlePasswordChange(e){
        this.setState({
            password : e.target.value
        });
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handlePassword2Change(e) {
        this.setState({
            password2: e.target.value
        });
    }

    handleSubmitResgistration(e) {

        e.preventDefault();

        if (!this.state.name.length || !this.state.email.includes("@") || !this.state.password || !(this.state.password === this.state.password2)){
            alert("Complete todos los campos de manera correcta");
            return;
        }

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        if (localStorage.users === undefined){
            let users = [newUser];
            localStorage.users = JSON.stringify(users);
        }
        else{
            let users = JSON.parse(localStorage.users);
            users = users.concat(newUser);
            localStorage.users = JSON.stringify(users);
        }
        alert("Registro exitos. Ya puede ingresar con su nuevo usuario");
        history.push({pathname: "/login"});
    }

    handleSubmitUpdate(e) {

        e.preventDefault();

        if (!this.state.name.length || !this.state.email.includes("@") || !this.state.password || !(this.state.password === this.state.password2)){
            alert("Complete todos los campos de manera correcta");
            return;
        }

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        let users = JSON.parse(localStorage.users);
        for (let i=0 ; i < users.length; i++){
            if (localStorage.email === users[i].email){
                users[i] = newUser
                localStorage.email = newUser.email;
                localStorage.name = newUser.name;
                break;
            }
        }
        localStorage.users = JSON.stringify(users);
        alert("Cambio exitoso. Ya puede ingresar con su nuevo usuario");
        history.push({pathname: "/todoApp"});
    }


    handleRedirectSignIn(){
        history.push({pathname: "/Login"});
    }

    handleRedirectApp(){
        history.push({pathname: "/todoApp"});
    }

}