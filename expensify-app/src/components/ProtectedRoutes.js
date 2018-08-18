import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "../components/LoginPage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const ProtectedRoutes = props => {
  const isStudent = props.isStudent;
  const isTeacher = props.isTeacher;

  const studentRoutes = [
    <Route key={1} path="/dashboard" component={ExpenseDashboardPage} />,
    <Route key={2} path="/help" component={HelpPage} />,
    <Route key={3} component={NotFoundPage} />
  ];
  const teacherRoutes = [
    <Route key={1} path="/" component={LoginPage} exact={true} />,
    <Route key={2} path="/dashboard" component={ExpenseDashboardPage} />,
    <Route key={3} path="/create" component={AddExpensePage} />,
    <Route key={4} path="/edit/:id" component={EditExpensePage} />,
    <Route key={5} path="/help" component={HelpPage} />,
    <Route key={6} component={NotFoundPage} />
  ];

  return (
    <div>
      {isStudent && studentRoutes}
      {isTeacher && teacherRoutes}
    </div>
  );
};

const mapStateToProps = state => ({
  isStudent: state.isStudent,
  isTeacher: state.isTeacher
});

export default connect(mapStateToProps)(ProtectedRoutes);

for (var x in common) {
  console.log(x + "=" + common[x]);
  if (x === "image") {
    let z = common.image;
    for (var y in z) {
      console.log(x + " = " + y + " : " + z[y]);
    }
  }
  if (x === "_links") {
    let z = common._links.self;
    for (var y in z) {
      console.log(x + " = " + y + " : " + z[y]);
    }
  }
}
