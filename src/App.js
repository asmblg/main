// import logo from './logo.svg';
import React, {useState} from 'react';
import OurTeam from './components/OurTeam';
import OurWork from './components/OurWork';
import Connect from './components/Connect';
import cardContent from './config/cardContent';
import { FaChevronCircleDown } from 'react-icons/fa';
// import content from './content';

import './App.css';
const logo = require('./images/Assemblage Logo 3.png');
// const darkLogo = require('./images/Assemblage Logo Dark Mode.png');

function App() {
  const [ view , setView ] = useState({
    selection: 'Our Work'
  });
  
  const viewOptions = [
    'Our Work',
    'Our Team',
    'Connect With Us'
  ]

  const View = ({selection}) => {
    switch (selection) {
      case 'Our Team':
        return <OurTeam cardContent={cardContent.team}/>;
      case 'Our Work':
        return <OurWork cardContent={cardContent.work} />;
      case 'Connect With Us':
        return <Connect cardContent={cardContent.connect}/>
      default:
        break;
    } 
  }
  
  return (
    <div 
      className="App"

    >
      <div 
        id="header"             
        onClick={() => setView({
          ...view,
          open: false
        })}
      >
        <img src={logo} id={"App-logo"} className={view.open ? 'shifted-up': 'shifted-down'} alt="logo" />
      </div>
      <div id='bio' className={view.open ? 'disappear' : ''}>
        <p>
        We are a small, nimble consulting firm specializing in geospatial analytics, research, data visualization, and full stack application development for public, nonprofit, and advocacy-oriented organizations wishing to turn data into action.
        </p>
        <p>
        Our mission is to facilitate the gathering of people, data, and technology in a way that moves the needle toward greater equity, inclusivity, and transparency in the various decision-making processes that impact our local and global communities.
        </p>

      </div>
      <div id='menu'>
        { viewOptions.map(title => 
          <div 
            className='menu-option' 
            onClick={() => setView({
              open: true,
              selection: title
            })}
          >
            {title}
          </div>
        )

        }
      </div>

      <div 
        id='view-box' 
        className={ view.selection ? view.open ? 'view-box-open' : 'view-box-close' : ''}
        style={{
          // backgroundOpacity: '0.',
          backgroundImage: `url(${require('./images/contour-bg.jpg')})`,
        }}
      >
        <div className='view-box-control-bar'>
          <FaChevronCircleDown
            size='2.5em'
            // className='view-box-close-button'
            onClick={() => setView({
              ...view,
              open: false
            })}
          />
        </div>
        <View selection={view.selection} />
        {/* // {renderView(view.selection)} */}
      </div>
      <div id='footer'>
        <p>
          &copy; 2024 Assemblage Consulting LLC
        </p>
      </div>

    </div>
  );
}

export default App;
