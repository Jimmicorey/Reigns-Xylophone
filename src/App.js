import React from 'react';
import './App.css';
import notes from './audiofiles/notes';

////////////////////////////////////////////////////////////////////////////
/*** PROJECT SYNOPSIS ***/
/* I wanted to create a simple xylophone/piano web app so my infant son can play on my phone/tablet and not deal with B.S. ads located in other "free" xylophone apps!!!! */

/** BAISC FUNCTIONALITY - MVP (minimum viable product)...
 * user clicks a button to play associated .wav file
 * need to refactor into separate components after I get the code working, 
 * be sure to DRY up my code & make more dynamic/reusable
*/
////////////////////////////////////////////////////////////////////////////

//these console.logs are just to test the "notes" object being passed into the component!
//console.log(notes);
//console.log(notes[0].file);
////////////////////////////////////////////////////////////////////////////


/* I need to refactor this into a separate component */
const MusicalKeyButton = (props) => {
  function handleClick(event) {
    // console.log(
    //   `button ${event.currentTarget.id} clicked & plays file: ${props.note}`
    // );

    new Audio(props.note).play();
  };

  return (
    <button 
      className="w3 h5 ma3 br3 bg-blue box-shadow hover-bg-light-purple grow pointer"
      id={props.id}
      note={props.note} 
      onClick={handleClick}
    >
      <h2 className="light-blue text-shadow2">{props.id}</h2>
    </button>
  );
}

////////////////////////////////////////////////////////////////////////////
function App() {
  return (
    <div className="app bg-light-pink">
      {/* APP TITLE */}
      <h1 className="tc fw9 f1 tracked light-blue bg-dark-pink pa3 text-shadow">Reign's Xylophone</h1>

      {/* BUTTON "KEYS" */}
      <div className="xylophone tc bg-yellow shadow-5">
        <MusicalKeyButton 
          id={notes[0].name} 
          note={notes[0].file}
        />
        <MusicalKeyButton 
          id={notes[1].name} 
          note={notes[1].file}
        />
        <MusicalKeyButton 
          id={notes[2].name} 
          note={notes[2].file}
        />
        <MusicalKeyButton 
          id={notes[3].name} 
          note={notes[3].file}
        />
        <MusicalKeyButton 
          id={notes[4].name} 
          note={notes[4].file}
        />
        <MusicalKeyButton 
          id={notes[5].name} 
          note={notes[5].file}
        />
        <MusicalKeyButton 
          id={notes[6].name} 
          note={notes[6].file}
        />
        <MusicalKeyButton 
          id={notes[7].name} 
          note={notes[7].file}
        />
      </div>
    </div>
  );
}

export default App;