import { connect } from "react-redux";
import Field from "../components/InputField";
import { addUser } from "../actions";

// const mapStateToProps = state => ({
//     users: state.users
// })

const mapDispatchToProps = dispatch => ({
  addUser: name => dispatch(addUser(name))
});

export default connect(
  null,
  mapDispatchToProps
)(Field);
