// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
const logo = require('./images/Assemblage Logo 3.png')

function App() {
  const [ view , setView ] = useState({});
  const menuOptions = [
    {
      title: 'Who We Are',
      description: 'Founded in 2022, we are a small research and application development shop located in the Rogers Park neighborhood of Chicago.',
      content: []
    },
    {
      title: 'What We Do',
      description: 'Built on the experience, expertise, and problem-solving skills of our founder, we provide services in geospatial anaylsis and visualization, planning research, and full stack application development including: the design, creation, and deployment of custom-built interactive web apps, database development and maintenance, and bug fixes and upgrades to existing applications.',
      content: []
    },    {
      title: 'Connect With Us',
      description: '',
      content: []

    }
  ]
  
  return (
    <div className="App">
      <div id="header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div id='bio'>
        <p>
        We are a small, nimble consulting firm specializing in geospatial analytics, research, and full stack application development for public, nonprofit, and advocacy-oriented organizations wishing to turn data into action.
        </p>
        <p>
        Our mission is to <strong>gather</strong> together people, data, and technology in a way that moves the needle toward greater equity, inclusivity, and transparency in the various decision-making processes that impact our local and global communities.
        </p>

      </div>
      <div id='menu'>
        { menuOptions.map(({title, description}) => 
          <div 
            className='menu-option' 
            onClick={() => setView({
              title: title,
              description: description
            })}
          >
            {title}
          </div>
        )

        }
      </div>
      <div id='view-box' className={ view.title ? 'view-box-open' : 'view-box-close'}>
        <div 
        >
          <span
            className='view-box-close-button'
            onClick={() => setView({})}
          >X</span>
        </div>
        <div
          className='view-box-header'
        >{view.title ? view.title.toUpperCase() : ''}</div>
        <div className='view-box-description'>
          {view.description}
        </div>
      </div>


    </div>
  );
}

export default App;
