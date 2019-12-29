import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers/rootReducer";

import Background from "./components/background/background";
import Navbar from "./components/navbar/navbarConnect";
import Preloader from "./components/page_preloader/preloader";

import MainLayout from "./components/layouts/main/layoutConnect";

const IndexPageAuth = lazy(() =>
  import("./routes/index/authorized/pageConnect")
);

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Background />
        <Navbar />
        <MainLayout>
          <Suspense fallback={Preloader}>
            <Switch>
              <Route path="/" exact>
                <IndexPageAuth />
              </Route>
            </Switch>
          </Suspense>
        </MainLayout>
      </Router>
    </Provider>
  );
}

export default App;
