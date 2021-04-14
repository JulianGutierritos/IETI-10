import React from 'react';
import {Todo} from './Todo';
import Box from '@material-ui/core/Box';

export class TodoList extends React.Component {
 
 
    render() {
        var todoList = [];
        if (this.props.todoList !== undefined){
            todoList = this.props.todoList.map((todo, i) => {
                if (this.props.filter !== null){
                    if (this.props.filter.dueDate !== null){
                        let fechaIgual = this.props.filter.dueDate.isSame(todo.dueDate, "day");
                        if ((todo.responsible.name.includes(this.props.filter.responsible)) &&  (todo.status.includes(this.props.filter.status)) && (fechaIgual) ){
                            return (
                                <Todo key={i} description={todo.description} status={todo.status} dueDate={todo.dueDate} 
                                responsible={todo.responsible} fileUrl={todo.fileUrl}/>
                            );
                        }
                    }
                    else{
                        if ((todo.responsible.name.includes(this.props.filter.responsible)) &&  (todo.status.includes(this.props.filter.status))){
                            return (
                                <Todo key={i} description={todo.description} status={todo.status} dueDate={todo.dueDate} 
                                responsible={todo.responsible} fileUrl={todo.fileUrl}/>
                            );
                        }
                    }
                }
                else{
                    return (
                        <Todo key={i} description={todo.description} status={todo.status} dueDate={todo.dueDate} 
                        responsible={todo.responsible} fileUrl={todo.fileUrl}/>
                    );
                }
            });
        }

        return (

            <Box component="span" display="block" p={1} m={1} >
                {todoList}
            </Box>
            
          
        );
    }

}
