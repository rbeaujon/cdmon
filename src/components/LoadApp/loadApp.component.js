import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import  './loadApp.style.scss';

/** @namespace  test/Component/LoadApp/Component/loadApp */
export class LoadApp extends PureComponent {
    static propTypes = {
        api_cdmon: PropTypes.array.isRequired,
        api_nodejs: PropTypes.array.isRequired
    }
   static defaultProps = {};

    renderNode() {
       
        const { api_nodejs, showApiNode } = this.props;

          return (
            api_nodejs.map((key) => (  
                <div className={ showApiNode }>
                      <div className="post" >
                        <div className='specifications'>
                            API: Node
                        </div>
                        <p>
                            Location:{ key.location } <br/>
                            System:{ key.system } <br/>
                            Host: 
                            <div>
                                { key.dom } 
                            </div>
                        </p>
                    </div>
                </div>
              )
          ))
      }

    renderPHP() {
       
        let { api_cdmon, showApiAistica, api_cdmon_host } = this.props;
          return (
            api_cdmon.map((key) => (  
                 
                <div className={ showApiAistica }>
                    <div className="post" >
                        <div className='specifications'>
                            API Aistica
                        </div>
                        <p>
                            Location:{ key.location } <br/>
                            System:{ key.system } <br/>
                        </p>     
                        <div className='"specifications'>
                         Host: <br />
                          
                            {
                                api_cdmon_host.map((host) => (
                                <>
                                    { key.id === host.server_id ? host.dom : null } 
                                </>
                                ))
                             }
                        </div>
                      
                    </div>
                </div>
              ))
          )
      }

      render() {
        return (
            <div className='post_container'>
                { this.renderPHP() }
                { this.renderNode() }
            </div>
        
        )
      }

}
export default LoadApp;