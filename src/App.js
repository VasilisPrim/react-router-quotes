import { Route, Routes, Navigate, Link } from "react-router-dom";
import React, { Suspense } from "react";


import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AddQuote = React.lazy(() => import("./pages/AddQuote"));
const SingleQuote = React.lazy(() => import("./pages/SingleQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />

          <Route path="/quotes" element={<AllQuotes />} />

          <Route path="/quotes/:quoteId" element={<SingleQuote />}>
            <Route
              path=""
              element={
                <div className="centered">
                  <Link className="btn--flat" to={`comments`}>
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route path={`comments`} element={<Comments />} />
          </Route>
          <Route path="/add-quote" element={<AddQuote />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
