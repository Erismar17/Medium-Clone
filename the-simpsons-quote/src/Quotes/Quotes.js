import './style.css';
import menu from '../img/menu.png';
import Card from '../QuoteCard/Card';
import logo from '../img/logo_simpson.png';
import { useState, useEffect } from 'react';

const Quotes = () => {
    const [info, setInfo] = useState();
    useEffect( () => {fetchData()}, []);

    function onClick () {
        fetchData();
    };

    function fetchData () {
        fetch('https://thesimpsonsquoteapi.glitch.me/quotes').then((value) => value.json()).then((value) => {setInfo(value[0])});
    };

    return (
        <div className={''}>
            <img className={'logo'} src={logo} alt='logo'/>
            <img className={'menu'} src={menu} alt='menu'/>
            <p className={'some-quotes'}>Discover some Simpsons quotes</p>
            <input className={'search'} placeholder='Search'/>

            <Card info={info} />
            {/* {info?.map((item)=> <Card info={item} /> )} */}

            <button className={'show-more'} onClick={() => onClick()}>Show me more</button>
        </div>
    )
}

export default Quotes;