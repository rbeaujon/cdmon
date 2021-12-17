import LoadAppContainer from  './components/LoadApp/';
import AppContainer from  './components/App';
import './styles/main.scss'

function App() {
  return (
    <div className = "container">
      <div className = "title">
        Server Details
      </div>
      <div className="lineMenu"></div> 
  
      <div className = "containerMenuLeft" >
        <div>
      <AppContainer />
        </div>
      </div> 
      <div className = "containerInfo" >
      <LoadAppContainer />
      </div>
      <div className="lineFooter"></div> 
      <div className="footer"> 
          <br /> Cdmon Test Assignment 
       </div> 
      </div> 
  
  );
}

export default App;
