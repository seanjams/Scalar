import React from 'react';
import * as Util from './util';

class Guitar extends React.Component {

  renderFrets(stringName, n) {
    const noteShift = Util.noteNames.indexOf(stringName);

    //map notes above 12th fret onto first 12 notes if not same already
    const newNotes = this.props.notes.slice(0,12);
    this.props.notes.slice(12).forEach((note, i) => (
      newNotes[i] = newNotes[i] || note
    ));

    //rotate notes around string shift
    for (let i = 0; i <= noteShift; i++) {
      let temp = newNotes.shift();
      newNotes.push(temp);
    }
    return newNotes.map((note, i) => (
        <button key={`fret-${i}`}
                className={
                  `fret ${note ? "in-key" : ""} ${Util.noteNames[i + 1 + noteShift]}`
                }
                style={{
                  left: -31 * i * i / 20 + 645 * i / 12,
                  top: i * (n - 2.5) / 4.20
                }}

                onClick={() => this.props.handleClick((i + 1 + noteShift) % 12)}>
        </button>
    ));
  }

  renderStrings() {
    const strings = ["E", "B", "G", "D", "A", "E"];
    return strings.map((string, i) => (
      <div className={`string string-${i}`}
           key={`string-${i}`}>
        { this.renderFrets(string, i) }
      </div>
    ));
  }

  render() {
    return(
      <div className="guitar-container">
        <div className="guitar"
          onKeyDown={this.props.handleKeyDown}
          onKeyUp={this.props.handleKeyUp}>
          <div className="fretboard">
            { this.renderStrings() }
          </div>
        </div>
      </div>
    );
  }
}

export default Guitar;
