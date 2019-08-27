import { connect } from "react-redux";
import List from "../components/UsersList";
import { updateUser, deleteUser } from "../actions/user";

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  updateUser: id => dispatch(updateUser(id)),
  deleteUser: id => dispatch(deleteUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
