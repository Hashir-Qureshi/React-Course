import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);

for (var x in common) {
  if (x === "image") {
    let z = common.image;
    for (var y in z) {
      console.log(x + " = " + y + " : " + z[y]);
    }
  } else if (x === "_links") {
    let z = common._links.self;
    for (var y in z) {
      console.log(x + " = " + y + " : " + z[y]);
    }
  } else {
    console.log(x + "=" + common[x]);
  }
}
