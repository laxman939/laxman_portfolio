import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "./hooks/withRouter";
import AppRoutes from "./routes/routes";
import Headermain from "./header";
import AnimatedCursor from "./hooks/AnimatedCursor";
import Background from "./components/Background";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  useEffect(() => {
    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Missing you! Come back soon 👋";
      } else {
        document.title = "Laxman";
      }
    };

    // Event listeners
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <Router>
      <Background />
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
