import React ,{useEffect} from "react";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";



const AllQuotes = (props) => {
  const {sendRequest,status,data:loadedData,error} = useHttp(getAllQuotes,true);
  console.log(loadedData)

  useEffect(()=>{
    sendRequest();
  },[sendRequest]);


  if (status==='pending'){
    return <div className="centered">
      <LoadingSpinner/>
    </div>
  }

  if(error){
    return <p className="centered focused">{error}</p>
  }

  if(status==='completed' && (!loadedData || loadedData.length === 0)){
    return <NoQuotesFound/>
  }

  


  return (
    <React.Fragment>
      <QuoteList quotes = {loadedData}/>
    </React.Fragment>
  );
};

export default AllQuotes;
