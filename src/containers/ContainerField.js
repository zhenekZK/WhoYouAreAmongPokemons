import { connect } from "react-redux";
import Field from "../components/InputField";
import { addUser } from "../actions/user";

const mapDispatchToProps = dispatch => ({
  addUser: name => dispatch(addUser(name))
});

export default connect(
  null,
  mapDispatchToProps
)(Field);
