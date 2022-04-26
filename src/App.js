// import logo from './logo.svg';
import './App.css';
const logo = require('./images/Assemblage Logo 3.png')

function App() {
  const menuOptions = [
    {
      text: 'Past',
      value: 'past'
    },
    {
      text: 'Present',
      value: 'present'
    },    {
      text: 'Future',
      value: 'future'
    }
  ]
  
  return (
    <div className="App">
      <div id="header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div id='bio'>
        <p>
        We are are small, nimble consulting firm specializing in research and full stack application development for public, nonprofit, and advocacy-oriented organizations wishing to turn data into into action.
        </p>
        <p>
        Our mission is to <strong>gather</strong> together people, data, and technology in a way that moves the needle toward greater equity, inclusivity, and transparency in the various decision-making processes that shape our neighborhoods and world.
        </p>

      </div>
      <div id='menu'>
        { menuOptions.map(({text, value}) => 
          <div className='menu-option' value={value}>
            {text}
          </div>
        )

        }
      </div>
    </div>
  );
}

export default App;
