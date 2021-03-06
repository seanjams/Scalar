import React from 'react';
import * as Util from './util';

class Piano extends React.Component {

  renderKeys(octave) {
    const blackKeys = [1,3,6,8,10];
    return this.props.notes.map((note, i) => {
      return (
        <button onClick={() => this.props.handleClick(i)}
          onKeyDown={this.props.handleKeyDown}
          onKeyUp={this.props.handleKeyUp}
          key={`piano-key-${i}`}
          id={`piano-key-${i}`}
          className={`piano-key
            ${blackKeys.includes(i % 12) ? "black" : "white"}
            ${note ? "in-key" : ""}
            ${Util.noteNames[i % 12]}`}>
          <p>{Util.keyMap[i]}</p>
        </button>
      );
    });
  }

  render() {
    return(
      <div id="piano" className="piano-keys">
        { this.renderKeys() }
      </div>
    );
  }
}

export default Piano;
