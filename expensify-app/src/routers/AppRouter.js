import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import LoginPage from "../components/LoginPage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import ProtectedRoutes from "../components/ProtectedRoutes";

export const history = createHistory();
const isStudent = false;
const isTeacher = false;

const AppRouter = props => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <ProtectedRoutes {...props} />
      </Switch>
    </div>
  </Router>
);
// {isStudent && (
//   <Switch>
//     <Route path="/" component={LoginPage} exact={true} />
//     <Route path="/dashboard" component={ExpenseDashboardPage} />
//     <Route path="/help" component={HelpPage} />
//     <Route component={NotFoundPage} />
//   </Switch>
// )}
// {isTeacher && (
//   <Switch>
//     <Route path="/" component={LoginPage} exact={true} />
//     <Route path="/dashboard" component={ExpenseDashboardPage} />
//     <Route path="/create" component={AddExpensePage} />
//     <Route path="/edit/:id" component={EditExpensePage} />
//     <Route path="/help" component={HelpPage} />
//     <Route component={NotFoundPage} />
//   </Switch>
// )}
export default AppRouter;
