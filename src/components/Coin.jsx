import React from 'react';
//Style
import "./Coin.css"

const Coin = ({coinData}) => {
	const {name,image,symbol,current_price,market_cap,price_change_percentage_24h:priceChnage} = coinData;
	console.log(coinData);
	// const toFixedPrice = async ()=>{
	// 	const priceChange = await price_change_percentage_24.toFixed(2);
	// }

	return (
		<div className='container'>
			<img className='image' src={image} alt="name" />
			<span className='name' >{name}</span>
			<span className='symbol' >{symbol.toUpperCase()}</span>
			<span className='currentPrice'>{`$${current_price.toLocaleString()}`}</span>
			<span className={priceChnage > 0 ?"green":"red"} >{`${priceChnage.toFixed(2)}%`}</span>
			<span className='marketCup' >{`$${market_cap.toLocaleString()}`}</span>
		</div>
	);
};

export default Coin;