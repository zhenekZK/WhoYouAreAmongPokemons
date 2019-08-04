import { connect } from "react-redux";
import List from "../components/UsersList";

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(List);
