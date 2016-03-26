var React = require("react");
var extend =  require("./extend");

module.exports = React.createClass({
  displayName: "NormalizedRangeInput",

  changeEvent: undefined,

  onMouseUp(event) {
    this.props.onChange(this.changeEvent);
  },

  onKeyUp(event) {
    if (['ArrowLeft', 'ArrowRight'].indexOf(event.key) > -1) {
      this.props.onChange(this.changeEvent);
    }
  },

  onInput(event) {
    this.props.onInput(event);
  },

  onChange(event) {
    event.persist();
    this.changeEvent = event;
  },

  render() {
    var props = extend(
      {},
      this.props,
      {
        type: 'range',
        onInput: this.onInput,
        onChange: this.onChange,
        onMouseUp: this.onMouseUp,
        onKeyUp: this.onKeyUp,
      }
    );

    return React.createElement('input', props);
  },
});
