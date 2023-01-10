import React from "react";
import axios from "axios";
import useSWR from "swr";
import { useDispatch } from "react-redux";
// components / redux
import { Error, Loading, Display, Selector } from "./components";
import { addData } from "./store/data";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function App() {
  // const dispatch = useDispatch();
  // const { data, error, isLoading } = useSWR("/api/data", fetcher);

  // React.useEffect(() => {
  //   if (!isLoading && !error) {
  //     dispatch(addData(data));
  //   }
  // }, [data]);

  // if (isLoading) {
  //   return <Loading />;
  // } else if (error) {
  //   return <Error />;
  // } else {
  //   return (
  //     <div>
  //       <h2>Data successfully loaded</h2>
  //     </div>
  //   );
  // }
  return (
      <div>
        <h1>Placeholder header</h1>
        <Selector />
        <Display />
      </div>
    );
}
