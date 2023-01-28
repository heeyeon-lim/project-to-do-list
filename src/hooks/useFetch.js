import { useState, useEffect } from 'react';

const useFetch = (url) => {

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
      fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
      })
    }, [url])

  return [data, setData, isPending]
}

 
export default useFetch;


