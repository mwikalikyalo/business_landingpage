import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from 'business.jpg';

function App() {
  return (
    <div className="App">
  <div className= "container-fluid">
  <div className="row">
  <div className="col-6">
  <h2>Get <span className='blue'>insights</span>  that help your business grow.</h2>
  <p className="text-center"> Discover the benefits of data analytics and make better decisions 
  regarding revenue, customer experience and overall efficiency.</p>
  </div>
  <ul className='text-start'>
    <li className="list-inline-item"><span className='h5'>10K+ </span> COMPANIES</li>
    <li className="list-inline-item"><span className='h5'>314 </span> TEMPLATES</li>
    <li className="list-inline-item"><span className='h5'>12M+ </span> QUERIES</li>
  </ul>
  </div>
  <div className="img-fluid">
  <img src={image} alt="people" />
  
  </div>                                    
  </div>    
    </div>
  );
}

export default App;
