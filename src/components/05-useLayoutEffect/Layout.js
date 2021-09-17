import React, { useEffect } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const {  quote } = !!data && data[0];

  const pTag = useRef()

  useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClientRect());
  }, [quote])

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <figure className="text-end">
        <blockquote className="blockquote">
          <p className="mb-0" ref={pTag}>{quote}</p>
        </blockquote>
      </figure>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};
