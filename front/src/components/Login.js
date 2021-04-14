import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import { history } from './../App';
import axios from 'axios'
export class Login extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {email : '' , passwd : '' }
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswdChange = this.handlePasswdChange.bind(this);
	}
	
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleEmailChange} value={this.state.email} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
									onChange={this.handlePasswdChange}
                                    value={this.state.passwd}
                                />
                            </FormControl>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
								type="submit"
                            >
                                Sign in
                            </Button>
                            <br/>
                            <br/>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
								onClick={this.handleRedirect}
                            >
                                Sign up
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
	
	handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }
	
	handlePasswdChange(e) {
        this.setState({
            passwd: e.target.value
        });
    }
	
	handleSubmit(e){
        axios.post('http://localhost:8080/user/login', {
             username: this.state.email,
             password: this.state.passwd
         })
             .then(function (response) {
                 console.log(response.data);
                 localStorage.token = response.data.accessToken;
             })
             .catch(function (error) {
                 console.log(error);
             })
             .then(function() {
                history.push({pathname: "/todoApp"});
             })
        this.setState({ 
            email : '',
            passwd : ''
        });
	}

    handleRedirect(){
        history.push({pathname: "/Registration"});
    }

}