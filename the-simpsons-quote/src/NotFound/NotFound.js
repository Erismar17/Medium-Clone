import './style.css';
import notFound from '../img/not_found.png';

const NotFound = () => {
    return (
        <div>
            <p className={''}>404</p>
            <p className={''}>D`OH<br/>we couldn`t find the page<br/>you`re looking for</p>
            <img className={''} src={notFound} alt='not-found'/>
        </div>
    )
}

export default NotFound;