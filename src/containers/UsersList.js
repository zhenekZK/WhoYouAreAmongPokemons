import { connect } from "react-redux";
import List from "../components/UsersList";

const mapStateToProps = state => ({
  users: state.users
});

// const mapDispatchToProps = dispatch => ({
//     addUser: name => dispatch(addUser(name))
// })

export default connect(mapStateToProps)(List);
