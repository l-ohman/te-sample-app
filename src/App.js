import React from "react";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then(res => res.data)

export default function App() {
  const { data, error, isLoading } = useSWR("/api/data", fetcher);
  
  React.useEffect(() => {
    if (!isLoading && !error) {
      console.log(data);
    }
  }, [data]);
  
  return (
        <div>
            <h2>{isLoading ? "Loading data" : "Data succesfully loaded"}</h2>
        </div>
    );
}
