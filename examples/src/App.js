import React, { PropTypes } from "react";
import Range from "../../src/range.js";

export const App = React.createClass({
  propTypes: {
  },

  getInitialState() {
    return {
      'input-default': 50,
      'change-default': 50,
      'input-normalized': 50,
      'change-normalized': 50,
    };
  },

  trackChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value });
    };
  },

  render() {
    const trackChange = this.trackChange;

    return (
      <div>
        <div>
          <h1>
            Default behaviour:
          </h1>
          <input type="range" onInput={trackChange('input-default')} onChange={trackChange('change-default')} />
          Input event: { this.state['input-default'] }<br/>
          Change event: { this.state['change-default'] }<br/>
        </div>

        <div>
          <h1>
            Normalized behaviour:
          </h1>
          <input type="range" onInput={trackChange('input-normalized')} onChange={trackChange('change-normalized')} />
          Input event: { this.state['input-normalized'] }<br/>
          Change event: { this.state['change-normalized'] }<br/>
        </div>
      </div>
    );
  },
});
