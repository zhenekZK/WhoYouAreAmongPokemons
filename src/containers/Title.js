import { connect } from "react-redux";
import Title from "../components/Title";

const mapStateToProps = state => ({
  title: state.title
});

export default connect(mapStateToProps)(Title);
