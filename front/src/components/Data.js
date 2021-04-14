import moment from "moment";
const todo1 = {
    description: "some description text ",
    responsible: {
        name: "Santiago Carrillo",
        email: "sancarbar@gmail"
    },
    status: "Ready",
    dueDate: moment(),
};


const todo2 = {
    description: "Laboratorio ",
    responsible: {
        name: "Julián",
        email: "julian@mail.com"
    },
    status: "In Progress",
    dueDate: moment(),
};

const Todos = [todo1, todo2];

export default Todos;

