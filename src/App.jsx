import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga4";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Bootcamp from "./pages/Bootcamp";
import Footer from "./components/Footer";

ReactGA.initialize("G-TMLPEYRV71");

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });

    if (location.pathname === "/summerbootcamp") {
      ReactGA.event({
        category: "Page",
        action: "Visited Summer Bootcamp Page",
      });
    }
  }, [location]);
};

const App = () => {
  return (
    <Router>
      <PageTrackingWrapper>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summerbootcamp" element={<BootcampPage />} />
        </Routes>
        <Footer />
      </PageTrackingWrapper>
    </Router>
  );
};

const PageTrackingWrapper = ({ children }) => {
  usePageTracking();
  return <Fragment>{children}</Fragment>;
};

const trackFormInteraction = () => {
  ReactGA.event({
    category: "Form",
    action: "Interacted with Registration Form",
    label: "Summer Bootcamp Registration",
  });
};

const trackFormSubmission = () => {
  ReactGA.event({
    category: "Form",
    action: "Submitted Registration Form",
    label: "Summer Bootcamp Registration",
  });
};

const BootcampPage = () => {
  return (
    <Bootcamp
      onFormInteraction={trackFormInteraction}
      onFormSubmission={trackFormSubmission}
    />
  );
};

export default App;
