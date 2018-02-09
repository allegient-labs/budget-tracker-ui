import { connect } from "react-redux";
import ClientsComponent from "../ClientsComponent";
import { rerouteToSelectedClient, setSelectedClient } from "../../actions";
import { withRouter } from "react-router-dom";

const mapState = state => ({
  selectedProject: state.clients
});

const mapDispatch = dispatch => {
  return {
    rerouteToSelectedClient(client) {
      dispatch(rerouteToSelectedClient(client));
    },
    setSelectedClient(client) {
      dispatch(setSelectedClient(client));
    }
  };
};

export default withRouter(connect(mapState, mapDispatch)(ClientsComponent));
