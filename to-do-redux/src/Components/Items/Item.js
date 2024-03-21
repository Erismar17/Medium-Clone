import { Link } from 'react-router-dom';
import './style.css';

const Item = (props) => {
    const title = props.title;
    const url = props.to;

    return (
        <div className={'item-to-do'}>
            <div className='left-side'>
                <Link to={url} className={'to-do-name'}>{title}</Link>
            </div>
            <div className='right-side'>
                <button className={'remove'}>X</button>
            </div>
        </div>
    );
};

export default Item;