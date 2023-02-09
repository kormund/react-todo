import './Task.css';
import { formatDistanceToNow } from 'date-fns'
import {Component} from "react";

const creationDate = formatDistanceToNow(new Date(), {includeSeconds: true});

export default class Task extends Component {

    state = {
        done: false,
        edit: false
    };

    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        });
    };

    onEditClick = () => {
        this.setState( ({ edit }) => {
            return {
                edit: !edit
            }
        })
    }
    render() {
        const { label, id } = this.props;
        const { done, edit } = this.state;

        let className = '';
        if (done) {
            className += 'completed'
        }

        if (edit) {
            className += 'editing'
        }

        return (
            <li key = { id } className={className}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={ done } readOnly={ true }
                           onClick={ this.onLabelClick }/>
                    <label
                    onClick={ this.onLabelClick }>
                        <span className="description">{ label }</span>
                        <span className="created">created { creationDate } ago</span>
                    </label>
                    <button className="icon icon-edit"
                    onClick={ this.onEditClick }></button>
                    <button className="icon icon-destroy"
                    onClick={ this.props.onDeleted }></button>


                </div>
                {edit && <input type="text" className="edit" value={label}/>}
            </li>
        )
    }
}