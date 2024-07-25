import { useState, useEffect } from "react";
import axios from "axios";

const Api = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false");
                setCoins(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCoins();
    }, []);
    return coins;
};

export default Api;
