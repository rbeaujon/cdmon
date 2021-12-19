import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PureComponent } from 'react';
import { updateShowApiNode, updateShowApiAistica } from '../../store/server/server.actions';
import LoadApp from './loadApp.component';

/** @namespace test/Component/LoadApp/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    id: state.serverReducer.server.id,
    location: state.serverReducer.server.location,
    system: state.serverReducer.server.system,
    showApiNode: state.serverReducer.showApiNode,
    showApiAistica: state.serverReducer.showApiAistica,
})
/** @namespace test/Component/LoadApp/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    updateShowApiNode: () => dispatch(updateShowApiNode('show')),
    updateShowApiAistica: () => dispatch(updateShowApiAistica('show'))
});

/** @namespace test/Component/LoadApp/Container/LoadAppContaiiner */
export class LoadAppContainer extends PureComponent {
    static propTypes = {
        showApiNode: PropTypes.string.isRequired,
        showApiAistica: PropTypes.string.isRequired
    }
    
    static defaultProps = {
    };

    state = {
        api_nodejs: [],
        api_cdmon: [],
        api_cdmon_host: [],
        showApiAistica: '',
        showApiNode: ''
    }
    async componentDidMount() {
        fetch('http://localhost:3200/server')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                ...this.state,
                api_nodejs: json
            });
        })
        fetch('http://aistica.com/cdmon/server/api/server.php')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                ...this.state,
                api_cdmon: json
            });
        })
        fetch('http://aistica.com/cdmon/server/api/host.php')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                ...this.state,
                api_cdmon_host: json
            });
        })
    }  

    render() {
        this.setState({
            showApiAistica: this.props.showApiAistica,
            showApiNode: this.props.showApiNode
        })
        
        return (
            <LoadApp 
            { ...this.state }
            />
        )
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(LoadAppContainer);