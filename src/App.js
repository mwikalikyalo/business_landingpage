import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './business.jpg';

function App() {
  return (
    <div className="App d-flex">
  <div className= "container-fluid">
  <div className="row gx-5 box">
  <div className="col-6 p-3">
  <h2>Get <span className='blue'>insights</span>  that help your business grow.</h2>
  <p className="text-center"> Discover the benefits of data analytics and make better decisions 
  regarding revenue, customer experience and overall efficiency.</p>
  </div>
  <ul className='text-start'>
    <li className="list-inline-item"><span className='h5'>10K+ </span><br /> COMPANIES</li>
    <li className="list-inline-item"><span className='h5'>314 </span><br />TEMPLATES</li>
    <li className="list-inline-item"><span className='h5'>12M+ </span><br /> QUERIES</li>
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
