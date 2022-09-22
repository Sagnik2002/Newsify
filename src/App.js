import "./App.css";

import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled
  const pageSize = 6;

  const [progress, setProgress] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(false);
  });

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  //#4c4f59
  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar color="#f11946" progress={progress} />

        <Switch>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/general">
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
