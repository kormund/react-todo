import './App.css';
import Footer from "../Footer/Footer";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";


export default function App() {

    return (
        <section className='todoapp'>
        <NewTaskForm />
        <section className='main'>
            <TaskList />

        </section>
        <Footer />

        </section>
    )
}

