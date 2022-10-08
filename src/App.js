
import './styles/home.css';
import  Welcome from './components/Welcome'

function App() {
  return (
    <div>
    <div className="splitScreen topPane" >
     <div className = "overlay">
      <blockquote className='quote-text'>The passage experienced a surge in popularity during the 1960s when the Letraset used it on
      their dry transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</blockquote>
      </div>
      </div>

      <div className="splitScreen bottomPane">
      <div className='centered'>      
      <Welcome> </Welcome>
      </div>

      </div>
      </div>
  
    

  );
}

export default App;
