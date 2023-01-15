import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import QuoteForm from "../components/quotes/QuoteForm";
import { addQuote } from "../lib/api";

const AddQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);
  const addQuoteHandler = (quote) => {
    sendRequest(quote);
  };

  return <QuoteForm isLoading = {status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default AddQuote;
