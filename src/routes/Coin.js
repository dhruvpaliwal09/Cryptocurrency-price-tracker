import { useEffect, useState } from "react"
import axios from "axios"
import{useParams} from 'react-router-dom'
import React from 'react'
import './Coin.css'


const Coin = () => {

const {id} = useParams();
const[coin, setCoin]= useState({})
const url='https://api.coingecko.com/api/v3/coins/bitcoin'

useEffect(() =>{
axios.get(url).then((res)=>{
    setCoin(res.data)
}).catch((error) =>{
    console.log(error)
})
},[])

  return (
    <div>
<div className="coin-container">
    <div className="content">
    <h1>{coin?.name}</h1>
    </div>
    <div className="content">
        <div className="rank">
            {/* <span className="rank-btn">Rank # {coin.market_cap_rank}</span> */}
        </div>
    </div>
    </div>
    </div>
  )
}

export default Coin
