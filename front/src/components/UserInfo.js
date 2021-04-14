import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import IconButton from '@material-ui/core/IconButton'
import { history } from './../App';

export class UserInfo extends Component {
    constructor(props){
        super(props);
        this.state = {src : 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png',
                    name : "Test",
                    email : "test@mail.com"};
        this.handleRedirection = this.handleRedirection.bind(this);
    }
    
    render(){
        return(
            <Card style={{display : 'flex'}} >
                <CardMedia 
                    style={{width: 100, height:100}}
                    image={this.state.src}
                    title = 'usuario'
                />
                <CardContent style= {{flex: '1 0 auto'}}>
                    <Typography component="h5" variant="h5">
                        {this.state.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {this.state.email}
                    </Typography>
                    <IconButton aria-label="edit" style={{marginLeft: 100}} onClick={() => { this.handleRedirection()}}>
                        <EditRoundedIcon/>
                    </IconButton>   
                </CardContent>
            </Card>
        );
    }

    handleRedirection(){
        history.push("/registration")
    }
}
