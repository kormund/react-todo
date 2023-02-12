import './Task.css';
import { formatDistanceToNow } from 'date-fns'
import {Component} from "react";
import PropTypes from "prop-types";



export default class Task extends Component {

    static defaultProps = {
        label: '',
        id: '',
        onDeleted: () => {},
        onToggleDone: () => {},
        onToggleEdit: () => {},
        edit: false,
        done: false,
        date: new Date()
    };

    static propTypes = {
        label: PropTypes.string,
        id: PropTypes.string,
        onDeleted: PropTypes.func,
        onToggleDone: PropTypes.func,
        onToggleEdit: PropTypes.func,
        edit: PropTypes.bool,
        done: PropTypes.bool,
        date: PropTypes.instanceOf(Date)
    }
    render() {
        const {
            label,
            id,
            onDeleted,
            onToggleDone,
            onToggleEdit,
            edit,
            done,
            date
        } = this.props;

        const creationDate = formatDistanceToNow(date, {includeSeconds: true});

        let className = '';
        if (done) {
            className += 'completed'
        }

        if (edit) {
            className += 'editing'
        }

        return (
            <li key = { id } className={ className }>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={ done } readOnly={ true }
                           onClick={ onToggleDone }/>
                    <label
                    onClick={ onToggleDone }>
                        <span className="description">{ label }</span>
                        <span className="created">created { creationDate } ago</span>
                    </label>
                    <button className="icon icon-edit"
                    onClick={ onToggleEdit }></button>
                    <button className="icon icon-destroy"
                    onClick={ onDeleted }></button>


                </div>
                {edit && <input type="text" className="edit" value={label}/>}
            </li>
        );
    };
};