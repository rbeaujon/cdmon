import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import  './loadApp.style.scss';

/** @namespace  test/Component/LoadApp/Component/loadApp */
export class LoadApp extends PureComponent {
    static propTypes = {
        data: PropTypes.array.isRequired
    }
   static defaultProps = {};

    render() {
       
        let { data, showServer } = this.props;
          return (
              data.map((key) => (  
                <div className={ showServer }>
                    <div className="post" >
                        ID:{ key.id } <br/>
                        Location:{ key.location } <br/>
                        System:{ key.system } <br/>
                    </div>
                </div>
              )
          ))
      }

}
export default LoadApp;