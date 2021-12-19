import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PureComponent } from 'react';
import {  updateShowApiNode, updateShowApiAistica } from '../../store/server/server.actions';


/** @namespace test/Component/LoadApp/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    showApiAistica: state.serverReducer.showApiAistica,
    showApiNode: state.serverReducer.showApiNode
})
/** @namespace test/Component/LoadApp/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    updateShowApiAistica: (isVisibleAistica) => dispatch(updateShowApiAistica(isVisibleAistica)),
    updateShowApiNode: (isVisibleNode) => dispatch(updateShowApiNode(isVisibleNode))
});

/** @namespace test/Component/LoadApp/Container/AppContaiiner */
export class AppContainer extends PureComponent {
    static propTypes = {
        showApiAistica: PropTypes.string.isRequired,
        showApiNode: PropTypes.string.isRequired
    } 
    static defaultProps = {
        showApiAistica: 'hidden',
        showApiNode: 'hidden'
    };
    

    render() {
     let isVisibleNode = this.props.showApiNode;
     let isVisibleAistica = this.props.showApiAistica;
     isVisibleNode === "hidden" ? isVisibleNode = "show" : isVisibleNode = "hidden";
     isVisibleAistica === "hidden" ? isVisibleAistica = "show" : isVisibleAistica = "hidden";
        return (
            <div>
                <button
                    onClick={ () => this.props.updateShowApiNode(isVisibleNode) }
                    className="buttonShowServer"
                    >
                    { isVisibleNode } server in Node
                </button>
                <button
                    onClick={ () => this.props.updateShowApiAistica(isVisibleAistica) }
                    className="buttonShowServer"
                    >
                    { isVisibleAistica } server in Aistica
                </button>
            </div>
        )
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);