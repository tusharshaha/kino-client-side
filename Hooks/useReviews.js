import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../Service/BaseUrl";

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${BaseUrl}/review`);
            const data = await res.data;
            setReviews(data);
        })()
    }, [])

    return { reviews }
};

export default useReviews;