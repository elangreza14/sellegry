import { useEffect, useRef, useReducer } from "react";
import axios from "axios";
import { FetchingReducer, initialStateFetch } from "../reducers";

export const useFetch = (url, cachecond, update) => {
  const cache = useRef({});

  const [state, dispatch] = useReducer(FetchingReducer, initialStateFetch);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      let config = {
        method: "get",
        url: url,
        // headers: {
        //   token: ""
        // }
      };
      dispatch({ type: "FETCHING" });
      console.log(cache);

      if (cache.current[url] && !cachecond) {
        const data = cache.current[url];
        dispatch({ type: "FETCHED", payload: data });
        // console.log("cache");
      } else {
        axios(config)
          .then(function (res) {
            cache.current[url] = res.data;
            if (cancelRequest) return;
            dispatch({ type: "FETCHED", payload: res.data });
            console.log("bukan cache");
          })
          .catch(function (e) {
            console.log(e);
            if (cancelRequest) return;
            dispatch({ type: "FETCH_ERROR", payload: e.message });
          });
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url, cachecond, update]);

  return state;
};
