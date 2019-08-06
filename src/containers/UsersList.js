import { connect } from "react-redux";
import List from "../components/UsersList";
// import {generatePokemon} from "../actions/user";

const mapStateToProps = state => ({
  users: state.users
});

// const mapDispatchToProps = (dispatch) => ({
//     generatePokemon: id => dispatch(generatePokemon(id))
// })

export default connect(mapStateToProps)(List);
