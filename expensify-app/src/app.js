import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { firebase } from "./firebase/firebase";

const store = configureStore();

const JSX = props => (
  <Provider store={store}>
    <AppRouter {...props} />
  </Provider>
);

let hasRendered = false;
const renderApp = status => {
  if (!hasRendered) {
    ReactDOM.render(<JSX isStudent={status} />, document.getElementById("app"));
    hasRendered = true;
  }
};
ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp(true);
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp(false);
    history.push("/");
  }
});
