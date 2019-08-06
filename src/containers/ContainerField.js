import { connect } from "react-redux";
import Field from "../components/InputField";
import { addUser } from "../actions/user";
// import { generatePokemon } from "../actions/pokemon";

const mapDispatchToProps = dispatch => ({
  addUser: name => dispatch(addUser(name))
  // generatePokemon: id => dispatch(generatePokemon(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Field);
