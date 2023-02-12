import "./TasksFilter.css";
import {Component} from "react";

class TasksFilter extends Component {

    btnFilters = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'completed', label: 'Completed'}
    ];
    render() {

        const { filter, onFilterChange } = this.props;

        const btnFilters = this.btnFilters.map(({name, label}) => {
            const isActive = filter === name;

            const btnClass = isActive ? 'selected' : '';

            return (<li key = { name }>
                        <button
                            className = { btnClass }
                            onClick = { () => onFilterChange(name) }
                        > { label }
                        </button>
                    </li>)
        })

        return (
            <div className='filters'>
                { btnFilters }
            </div>
        )
    }
}

export default TasksFilter;