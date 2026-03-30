import { Fragment, Suspense, lazy, useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Provider } from "./components/ui/provider";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "./components/WhatsAppButton";

const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Bootcamp = lazy(() => import("./pages/Bootcamp"));

const GA_MEASUREMENT_ID = "G-TMLPEYRV71";
let gaPromise;

function loadAnalytics() {
  if (import.meta.env.DEV) return Promise.resolve(null);
  if (gaPromise) return gaPromise;
  gaPromise = import("react-ga4").then((mod) => {
    const ReactGA = mod.default;
    ReactGA.initialize(GA_MEASUREMENT_ID);
    return ReactGA;
  });
  return gaPromise;
}

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const sendPageview = async () => {
      const ReactGA = await loadAnalytics();
      if (!ReactGA) return;

      ReactGA.send({ hitType: "pageview", page: location.pathname });

      if (location.pathname === "/summer-bootcamp") {
        ReactGA.event({
          category: "Page",
          action: "Visited Summer Bootcamp Page",
        });
      }
    };

    // Defer analytics so it doesn't compete with first paint.
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => void sendPageview(), { timeout: 2000 });
    } else {
      setTimeout(() => void sendPageview(), 1500);
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
            <Suspense fallback={null}>
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
                  path="/summer-bootcamp"
                  element={
                    <Bootcamp
                      onFormInteraction={handleFormInteraction}
                      onFormSubmission={handleFormSubmission}
                    />
                  }
                />
              </Routes>
            </Suspense>
            <Footer />
            <WhatsAppButton />
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
  void loadAnalytics().then((ReactGA) => {
    if (!ReactGA) return;
    ReactGA.event({
      category: "Form",
      action: "Interacted with Registration Form",
      label: "Class Registration",
    });
  });
};

const trackFormSubmission = () => {
  void loadAnalytics().then((ReactGA) => {
    if (!ReactGA) return;
    ReactGA.event({
      category: "Form",
      action: "Submitted Registration Form",
      label: "Class Registration",
    });
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
