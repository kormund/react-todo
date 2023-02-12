import './App.css';
import Footer from "../Footer/Footer";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import {Component} from "react";


export default class App extends Component {

    maxId = Math.floor(Math.random() * 100 + 1);
    state = {
        taskData: [
            this.createTask('Drink tea'),
            this.createTask('Build react app'),
            this.createTask('Eat brunch'),
            this.createTask('Save your progress')
        ]
    };

    createTask(label) {
        return {
            label,
            id: this.maxId++,
            done: false,
            edit: false
        }
    }

    addItem = (label) => {

        const newItem = this.createTask(label);

        this.setState(({ taskData }) => {
            const newArr = [
                ...taskData,
                newItem
            ];

            return {
                taskData: newArr
            }
        })
    }

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

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const newItem = {...arr[idx], [propName]: !arr[idx][propName]}
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
            ];
    }

    onToggleEdit = (id) => {

        this.setState(({ taskData }) => {
            return {
            taskData: this.toggleProperty(taskData, id, 'edit')
            }
        });
    }
    onToggleDone = (id) => {

        this.setState(({ taskData }) => {
            return {
                taskData: this.toggleProperty(taskData, id, 'done')
            }
        });
    }
    render() {

        const doneCount = this.state.taskData
                            .filter((el) => !el.done).length;


        return (
            <section className='todoapp'>
                <NewTaskForm
                addItem = { this.addItem }/>
                <section className='main'>
                    <TaskList
                        todos={this.state.taskData}
                        onDeleted = { this.deleteItem }
                        onToggleEdit = { this.onToggleEdit }
                        onToggleDone = { this.onToggleDone }/>
                </section>
                <Footer done = { doneCount } />

            </section>
        );
    };
};

