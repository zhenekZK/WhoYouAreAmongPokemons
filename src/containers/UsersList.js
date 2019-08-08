import { connect } from "react-redux";
import List from "../components/UsersList";
import { updateUser } from "../actions/user";

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  updateUser: id => dispatch(updateUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
