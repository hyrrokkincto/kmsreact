import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/home"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
