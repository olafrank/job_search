import { useState, useEffect } from "react";
import axios from "axios";




const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key':  '38494d9818msh8a5da466a21e5fcp1bb340jsn3cdd230fefd3',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query }

    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options)

            setData(response.data.data);
            setIsLoading(false)

        } catch (error) {
            setError(error)
            alert('there is an error getting data')

        } finally {
            setIsLoading(false)

        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch }

}
export default useFetch;