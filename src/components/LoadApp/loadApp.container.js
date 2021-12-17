import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PureComponent } from 'react';
import { updateShowServer } from '../../store/server/server.actions';
import LoadApp from './loadApp.component';

/** @namespace test/Component/LoadApp/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    id: state.serverReducer.server.id,
    location: state.serverReducer.server.location,
    system: state.serverReducer.server.system,
    showServer: state.serverReducer.showServer
})
/** @namespace test/Component/LoadApp/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    updateShowServer: () => dispatch(updateShowServer('show'))
});

/** @namespace test/Component/LoadApp/Container/LoadAppContaiiner */
export class LoadAppContainer extends PureComponent {
    static propTypes = {
        showServer: PropTypes.string.isRequired
    }
    
    static defaultProps = {
    };

    state = {
        data: []
    }

    async componentDidMount() {
        fetch('http://localhost:3200/server')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                data: json,
                DataisLoaded: true
            });
        })
    }  

    render() {
        this.setState({
            showServer: this.props.showServer
        })
        return (
            <LoadApp 
            { ...this.state }
            />
        )
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(LoadAppContainer);