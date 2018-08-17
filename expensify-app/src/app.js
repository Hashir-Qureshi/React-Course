import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase";
import selectExpensesTotal from "./selectors/expenses-total";

const expenses = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 109500,
    createdAt: 0
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    createdAt: 0
  }
];

const total = selectExpensesTotal(expenses);

console.log(total);

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});
