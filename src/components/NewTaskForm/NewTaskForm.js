import "./NewTaskForm.css";
import {Component} from "react";

export default class NewTaskForm extends Component {

    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });

    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ""
        })
    };
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={ this.onSubmit }>
                <input className="new-todo"
                       type='text'
                       placeholder="What needs to be done?"
                       autoFocus
                       onChange={ this.onLabelChange }
                       value = { this.state.label }
                />
                </form>
            </header>
        )
    }
}

NewTaskForm.defaultProps = {
    addItem: () => {}
}