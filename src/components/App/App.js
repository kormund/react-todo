import './App.css';
import Footer from "../Footer/Footer";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import {Component} from "react";


export default class App extends Component {

    state = {
        taskData: [
            {label: 'Drink coffee', id: 1},
            {label: 'Build react app', id: 2},
            {label: 'Eat brunch', id: 3},
            {label: 'Beat that game', id: 4}
        ]
    };

    deleteItem = (id) => {
        this.setState(({ taskData }) => {
            const idx = taskData.findIndex((el) => el.id === id);

            const newArray = [
                ...taskData.slice(0, idx),
                ...taskData.slice(idx + 1)
            ];

            return {
                taskData: newArray
            };
        });
    };
    render() {

        return (
            <section className='todoapp'>
                <NewTaskForm/>
                <section className='main'>
                    <TaskList
                        todos={this.state.taskData}
                        onDeleted = { (id) => this.deleteItem(id) }/>
                </section>
                <Footer/>

            </section>
        );
    };
};

