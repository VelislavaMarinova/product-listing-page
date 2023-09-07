import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalLengthofResult, setTotalLengthOfResult] = useState(0)

    useEffect(() => {
        const abortController = new AbortController();
    
        const fetchData = () => {
          setIsLoading(true);
          setError(null);
    
          fetch(url, { signal: abortController.signal })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Something went wrong");
              }
              setTotalLengthOfResult(response.headers.get("X-Total-Count"));
              return response.json();
            })
            .then((responseData) => {
              setData(responseData);
            })
            .catch((err) => {
              setError(err.message || "An error occurred.");
            })
            .finally(() => {
              setIsLoading(false);
            });
        };
    
        fetchData();
    
        return () => {
          abortController.abort();
        };
      }, [url]);
    
      return { data,  setData };

}
export default useFetch