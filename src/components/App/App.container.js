import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PureComponent } from 'react';
import { updateShowServer } from '../../store/server/server.actions';


/** @namespace test/Component/LoadApp/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    showServer: state.serverReducer.showServer
})
/** @namespace test/Component/LoadApp/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    updateShowServer: (isVisible) => dispatch(updateShowServer(isVisible))
});

/** @namespace test/Component/LoadApp/Container/AppContaiiner */
export class AppContainer extends PureComponent {
    static propTypes = {
        showServer: PropTypes.string.isRequired
    } 
    static defaultProps = {
        showServer: 'hidden'
    };
    

    render() {
     let isVisible = this.props.showServer;
     isVisible === "hidden" ? isVisible = "show" : isVisible = "hidden";
        return (
            <button
            onClick={ () => this.props.updateShowServer(isVisible) }
            className="buttonShowServer"
            >
            Server Availables in Node
          </button>
        )
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);