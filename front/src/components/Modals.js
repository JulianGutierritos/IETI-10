import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import moment from "moment";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from "@material-ui/core/Input";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import  DateFnsUtils  from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import './TodoApp.css';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({changeFilter}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [responsible, setResponsible] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [dueDate, setDueDate] = React.useState(null);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  const handleResponsibleChange = (e) => {
     setResponsible(e.target.value);
  }

  const handleStatusChange = (e) => {
      setStatus(e.target.value);
  }

  const handleDateChange = (e) => {
      setDueDate( moment ( e ) );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
        status: status,
        dueDate: dueDate,
        responsible : responsible,
    };
    changeFilter(newItem);
  }

  const handleClear = () => {
    setDueDate(null);
    setResponsible("");
    setStatus("");
  }

  return (
    <div>
      <Button type="button" onClick={handleOpen} variant="contained" color="primary">
        Filter
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} className={classes.paper} >
          <form onSubmit={handleSubmit} className="todo-form" >
           <Card>
              <CardContent>
              <h3 style={{textAlign:'center'}}>Filter Task</h3>

              <label htmlFor="status" className="right-margin">
                  Status:
              </label>

              <Select
                  id="status"
                  onChange={handleStatusChange}
                  value={status}>
                  
                  <MenuItem value={"In Progress"}>In Proggress</MenuItem>
                  <MenuItem value={"Ready"}>Ready</MenuItem>
                  <MenuItem value={"Done"}>Done</MenuItem>
              </Select>

              <br/>
              <br/>
              <label htmlFor="date" className="right-margin">
                  Due Date:
              </label>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                  id="due-date"
                  value={dueDate}
                  onChange={handleDateChange}>
              </DatePicker>
              </MuiPickersUtilsProvider>
              
              <br/>
              <br/>

              <label htmlFor="ResponsibleName" className="right-margin">
                  Responsible Name:
              </label>

              <Input
                  id="ResponsibleName"
                  onChange={handleResponsibleChange}
                  value={responsible}>
              </Input>

              <br/>
              <br/>
              <Button type="submit" 
                onClick={handleClose} 
                fullWidth
                variant="contained"
                color="primary">
                Apply
              </Button>
              <br/>
              <br/>
              <Button 
                onClick={handleClear} 
                fullWidth
                variant="contained"
                color="primary">
                Clear
              </Button>
              </CardContent>
              </Card>
          </form>
        </Fade>     
      </Modal>
    </div>
    );
}