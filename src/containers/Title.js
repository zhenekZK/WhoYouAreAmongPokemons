import { connect } from "react-redux";
import Title from "../components/Title";

const mapStateToProps = state => state.title;

export default connect(mapStateToProps)(Title);
