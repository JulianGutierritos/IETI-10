import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import './components/TodoApp.css';
import {TodoApp} from './components/TodoApp';
import {AddTodo} from './components/AddTodo';
import {Login} from './components/Login';
import {Registration} from './components/Registration';
import {BrowserRouter as Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({forceRefresh:true});

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route {...rest} render={(props) => (
        isLoggedIn !== undefined 
          ? <Component {...props} />
          : <Redirect to='/login' />
    )} />
)

const PrivateRoute2 = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route {...rest} render={(props) => (
        isLoggedIn === undefined 
          ? <Component {...props} />
          : <Redirect to='/todoApp' />
    )} />
)




export class App extends Component {
	constructor(props) {
        super(props);
        if ((localStorage.token !== undefined) && (localStorage.token !== "undefined")){
            this.state = { token : localStorage.token };
        }
        else{
            this.state = { token : "token" };
        }
		this.handleTokenChange = this.handleTokenChange.bind(this);
		this.TodoAppView = () => (<TodoApp />);
		this.LoginView = () => (<Login handleTokenChange  = {this.handleTokenChange}/>);
        this.AddTodo = () => (<AddTodo />); 
    }
	
    render() {
        return (
            <BrowserRouter history={history}>
                <Switch>
                <Redirect exact from='/' to='/login' />
				<PrivateRoute2 path={"/login"} isLoggedIn={this.state.token} component={this.LoginView}/>
                <Route path={"/registration"} isLoggedIn={this.state.token} component={Registration}/>
				<PrivateRoute path={"/todoApp"} isLoggedIn={this.state.token} component={TodoApp}/>
				<PrivateRoute path={"/addTodo"} isLoggedIn={this.state.token} component={AddTodo}/>
				</Switch>
            </BrowserRouter>
		);
	}
	handleTokenChange(e){
        console.log("entro a cambiar el token");
        this.setState({ 
			token  : localStorage.token
        }); 
	}
}



