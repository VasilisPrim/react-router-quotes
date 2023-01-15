import React,{useEffect} from "react";
import { useParams} from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { Outlet} from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";


const SingleQuote = () => {
  console.log("hi");
  
  const params = useParams();
 

  const {quoteId} = params;
  const {sendRequest,status,data:loadedQuote,error} = useHttp(getSingleQuote,true)

 // const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  useEffect(()=>{
    sendRequest(quoteId);
  },[sendRequest,quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>Quote not found!</p>;
  }

  return (
    <React.Fragment>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      <Outlet/>
    </React.Fragment>
  );
};

export default SingleQuote;
