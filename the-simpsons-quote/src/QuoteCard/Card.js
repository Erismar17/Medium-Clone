import './style.css';

const Card = (props) => {
    console.log(props.info);
    return (
        <div>
            <p>{props.info?.character}</p>
            <img src={props.info?.image}/>
            <p>{props.info?.quote}</p>
        </div>
    )
}

export default Card;