import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [totalLengthOfResult, setTotalLengthOfResult] = useState(0);

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
          // setTotalLengthOfResult(response.headers.get("X-Total-Count"));
          return response.json();
        })
        .then((responseData) => {
          setData(responseData);
          if (options.onSuccess !== undefined) {
            options.onSuccess(responseData)
          }
          // if (limit) {
          //   if (responseData.length < limit) {
          //     setCanLoadMore(false)
          //   } else {
          //     setCanLoadMore(true)
          //   }
          // }
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
  }, [options.onSuccess, url]);

  return { data, setData, isLoading, error };

}
export default useFetch