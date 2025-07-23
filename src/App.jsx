import { Fragment, useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga4";
import { Provider } from "./components/ui/provider";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Bootcamp from "./pages/Bootcamp";
import { Box } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

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
  const [formInteracted, setFormInteracted] = useState(false);

  const handleFormInteraction = () => {
    setFormInteracted(true);
  };

  const handleFormSubmission = () => {
    setFormInteracted(false);
  };

  return (
    <Provider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <PageTrackingWrapper>
          <Box bg="white" minH="100vh" color="gray.800">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/register"
                element={
                  <Register
                    onFormInteraction={handleFormInteraction}
                    onFormSubmission={handleFormSubmission}
                  />
                }
              />
              <Route
                path="/summerbootcamp"
                element={
                  <Bootcamp
                    onFormInteraction={handleFormInteraction}
                    onFormSubmission={handleFormSubmission}
                  />
                }
              />
            </Routes>
            <Footer />
            <Toaster />
          </Box>
        </PageTrackingWrapper>
      </Router>
    </Provider>
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
    label: "Class Registration",
    // label: "Summer Bootcamp Registration",
  });
};

const trackFormSubmission = () => {
  ReactGA.event({
    category: "Form",
    action: "Submitted Registration Form",
    // label: "Summer Bootcamp Registration",
    label: "Class Registration",
  });
};

// const BootcampPage = () => {
//   return (
//     <Bootcamp
//       onFormInteraction={trackFormInteraction}
//       onFormSubmission={trackFormSubmission}
//     />
//   );
// };

const RegistrationPage = () => {
  return (
    <Register
      onFormInteraction={trackFormInteraction}
      onFormSubmission={trackFormSubmission}
    />
  );
};

export default App;
