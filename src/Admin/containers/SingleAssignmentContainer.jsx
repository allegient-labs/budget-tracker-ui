import { connect } from "react-redux";
import SingleAssignmentComponent from "../SingleAssignmentComponent";
import { setSelectedUser } from "../../actions";
import { withRouter } from "react-router-dom";

const mapState = state => ({
  selectedUser: state.users.selectedUser
});

const mapDispatch = dispatch => {
  return {
    setSelectedUser(user) {
      dispatch(setSelectedUser(user));
    }
  };
};

export default withRouter(
  connect(mapState, mapDispatch)(SingleAssignmentComponent)
);
