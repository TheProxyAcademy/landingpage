import { Fragment, Suspense, lazy, useEffect } from "react";
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
import { track, trackOnce, trackPageView } from "./lib/pixel";

const BOOTCAMP_PATH = "/summerbootcamp";

const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Bootcamp = lazy(() => import("./pages/Bootcamp"));
const Programmes = lazy(() => import("./pages/Programmes"));
const ProgrammeDetail = lazy(() => import("./pages/ProgrammeDetail"));
const ProgrammeSystems = lazy(() => import("./pages/ProgrammeSystems"));
const FocusflowCohort = lazy(() => import("./pages/FocusflowCohort"));
const FocusflowCohortRegister = lazy(() => import("./pages/FocusflowCohortRegister"));

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

// The pixel base code in index.html already counted a PageView for whichever URL
// the browser loaded, so that path starts out already tracked. Deduping by path
// (rather than a "first render" flag) also absorbs StrictMode's double-invoked
// effects in dev, which would otherwise send every landing event twice.
let trackedPath = typeof window === "undefined" ? null : window.location.pathname;
let bootcampViewTracked = false;

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path !== trackedPath) {
      trackedPath = path;
      bootcampViewTracked = false;
      trackPageView();
    }

    // Bootcamp ad traffic is the reason the pixel exists — mark the landing
    // page itself as a ViewContent so it can seed a retargeting audience.
    if (path === BOOTCAMP_PATH && !bootcampViewTracked) {
      bootcampViewTracked = true;
      track("ViewContent", {
        content_name: "Summer Bootcamp",
        content_category: "Bootcamp",
      });
    }
  }, [location]);

  useEffect(() => {
    const sendPageview = async () => {
      const ReactGA = await loadAnalytics();
      if (!ReactGA) return;

      ReactGA.send({ hitType: "pageview", page: location.pathname });

      if (location.pathname === BOOTCAMP_PATH) {
        ReactGA.event({
          category: "Page",
          action: "Visited Summer Bootcamp Page",
        });
      }
      if (location.pathname === "/focusflow-cohort") {
        ReactGA.event({
          category: "Page",
          action: "Visited FocusFlow Cohort Page",
        });
      }
      if (location.pathname === "/focusflow-cohort/register") {
        ReactGA.event({
          category: "Page",
          action: "Visited FocusFlow Cohort Register Page",
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
  return (
    <Provider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <PageTrackingWrapper>
          <Box bg="white" minH="100vh" color="gray.800">
            <Nav />
            <Suspense
              fallback={
                <Box minH="40vh" display="flex" alignItems="center" justifyContent="center">
                  <Box color="gray.500" fontSize="sm">
                    Loading…
                  </Box>
                </Box>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/register"
                  element={
                    <Register
                      onFormInteraction={onRegisterInteraction}
                      onFormSubmission={onRegisterSubmission}
                    />
                  }
                />
                <Route
                  path={BOOTCAMP_PATH}
                  element={
                    <Bootcamp
                      onFormInteraction={onBootcampInteraction}
                      onFormSubmission={onBootcampSubmission}
                    />
                  }
                />
                {/* /programmes/how-it-works is declared before the :slug route so
                    it is not swallowed as a track slug. */}
                <Route path="/programmes" element={<Programmes />} />
                <Route path="/programmes/how-it-works" element={<ProgrammeSystems />} />
                <Route path="/programmes/:slug" element={<ProgrammeDetail />} />
                <Route path="/focusflow-cohort" element={<FocusflowCohort />} />
                <Route
                  path="/focusflow-cohort/register"
                  element={<FocusflowCohortRegister />}
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

const trackFormInteraction = (label) => {
  // Both registration forms are cross-origin Google Forms, so engaging with one
  // is the strongest conversion signal the pixel can actually observe. Fired at
  // most once per label per page load, so re-clicking can't inflate the count.
  trackOnce(`form:${label}`, "Lead", { content_name: label });

  void loadAnalytics().then((ReactGA) => {
    if (!ReactGA) return;
    ReactGA.event({
      category: "Form",
      action: "Interacted with Registration Form",
      label,
    });
  });
};

const trackFormSubmission = (label) => {
  track("CompleteRegistration", { content_name: label });

  void loadAnalytics().then((ReactGA) => {
    if (!ReactGA) return;
    ReactGA.event({
      category: "Form",
      action: "Submitted Registration Form",
      label,
    });
  });
};

// Defined at module scope so their identities stay stable across renders —
// BootcampHero subscribes to onFormInteraction in an effect.
const onRegisterInteraction = () => trackFormInteraction("Class Registration");
const onRegisterSubmission = () => trackFormSubmission("Class Registration");
const onBootcampInteraction = () => trackFormInteraction("Summer Bootcamp");
const onBootcampSubmission = () => trackFormSubmission("Summer Bootcamp");

export default App;
