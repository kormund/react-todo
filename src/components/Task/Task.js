import './Task.css';
import { formatDistanceToNow } from 'date-fns'

const creationDate = formatDistanceToNow(new Date(), {includeSeconds: true});

export default function Task({label, taskType, editing}) {

        return (
            <li className={ taskType }>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>
                    <span className="description">{ label }</span>
                    <span className="created">created { creationDate } ago</span>
                </label>
                <button className="icon icon-edit"></button>
                <button  className="icon icon-destroy"></button>


            </div>
            { editing === 'true' && <input type="text" className="edit" value={ label }/>}
            </li>
        )
}