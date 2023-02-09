import './App.css';
import Footer from "../Footer/Footer";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";


export default function App() {

    const taskData = [
        { label: 'Drink coffee', id: 1 },
        { label: 'Build react app', id: 2 },
        { label: 'Eat brunch', id: 3 },
        { label: 'Beat that game', id: 4 }
    ]

    return (
        <section className='todoapp'>
        <NewTaskForm />
        <section className='main'>
            <TaskList todos = { taskData }/>
        </section>
        <Footer />

        </section>
    )
}

