import React, {Component} from 'react';
import { Drawer } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import ReorderIcon from '@material-ui/icons/Reorder';
import Toolbar from "@material-ui/core/Toolbar";
import {UserInfo}  from './UserInfo';
import Typography from '@material-ui/core/Typography';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';


export class MyDrawer extends Component {
    constructor(props){
        super(props);
        this.state = {open : false};
        this.handleChangeOpen = this.handleChangeOpen.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleChangeOpen(){
        if (this.state.open){
            this.setState({
                open : false
            });
        }
        else{
            this.setState({
                open : true
            });
        }
    }

    handleLogOut(){
        this.props.handleLogOut();
    }

    render(){
        return (
            <div>
                <Toolbar>
                    <IconButton onClick={() => { this.handleChangeOpen() }}>
                            <ReorderIcon/>
                    </IconButton>  
                </Toolbar>
                <Drawer variant='persistent' anchor='left' open={this.state.open}>
                    <Toolbar>
                        <IconButton onClick={() => { this.handleChangeOpen() }}>
                                <ReorderIcon/>
                        </IconButton>  
                    </Toolbar>
                    <div style={{display : 'flex'}}>
                    </div>
                    <UserInfo/>
                    <div style={{display: 'flex' , marginTop: '130%', marginLeft:20}}>
                        <IconButton onClick= {() => { this.props.handleLogOut() }} >
                            <ExitToAppRoundedIcon/>
                        </IconButton >
                        <Typography component="h6" variant="subtitle1" style={{marginTop: 10}}>
                            Log Out
                         </Typography>
                    </div>
                </Drawer>


            </div>

        );
    }
}