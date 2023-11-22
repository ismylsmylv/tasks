import axios from 'axios';
import { useEffect, useState } from 'react';
export default function useFetch(url, method) {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    console.log(loading)
    useEffect(() => {
        setloading("false")
        // if (method == "get") {

        //}

        if (loading) {
            // axios(url).then(res => {
            //     return setdata(res.data)
            //     // console.log(res.data)
            // }).catch((error) => {
            //     seterror("error made")
            // }).finally(setloading(false))

            if (method == "get") {
                axios.get(url).then(res => {
                    return setdata(res.data)
                    // console.log(res.data)
                }).catch(function (error) {
                    seterror(true)
                    setloading(false)
                }).finally(setloading(false))
            }
        }
    }, []);


    return {
        data, loading, error
    }
}
