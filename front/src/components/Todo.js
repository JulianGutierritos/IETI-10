import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import IconButton from '@material-ui/core/IconButton'
import AttachmentIcon from '@material-ui/icons/Attachment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import moment from "moment";

export class Todo extends React.Component {


    render() {
        let iconCard;
        if (this.props.status === "Ready"){
            iconCard =  <CheckCircleIcon style={{position:'sticky', left:'95%', color:'green'}}>
                            </CheckCircleIcon>
        }
        else if (this.props.status === "Done"){
            iconCard =  <ThumbUpIcon style={{position:'sticky', left:'95%', color:'blue'}}>
                            </ThumbUpIcon>
        }
        else{
            iconCard =  <WatchLaterIcon  style={{position:'sticky', left:'95%', color:'yellow'}}>
                            </WatchLaterIcon >
        }
        let compimg;
        if (this.props.fileUrl !== undefined){
            const type = this.props.fileUrl.substr(this.props.fileUrl.length - 4, this.props.fileUrl.length - 1)
            console.log(type);
            if(type === ".PDF" || type === ".pdf"){
                compimg = <IconButton href={"http://localhost:8080" + this.props.fileUrl} target="_blank" download> 
                            <AttachmentIcon >
                            </AttachmentIcon> 
                            </IconButton>
            }
            else{
                compimg = <Typography><img src={"http://localhost:8080" + this.props.fileUrl} style={{width:100, height:100}} /></Typography>
            }
        }
        else{
            compimg = "";
        }

        return (
            <Card variant="outlined" style={{marginLeft:'40%', marginTop:'2%', width:'20%', borderWidth: 3, borderColor:'black'}}>
                <CardContent style={{textAlign:'left'}}>
                    <div style={{display:'flex'}} >
                        <Typography>{this.props.description}</Typography>
                        {iconCard}
                    </div>
                    <Typography>{this.props.status} - {moment(this.props.dueDate, "DD-MM-YYYY").format('DD-MM-YYYY')}</Typography>
                    <Typography>{this.props.responsible.name}</Typography>
                    {compimg}
                </CardContent>
            </Card>
        );
    }

}