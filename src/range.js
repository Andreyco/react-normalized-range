var React = require("react");
var extend =  require("./extend");

module.exports = React.createClass({
  displayName: "NormalizedRangeInput",

  propTypes: {
    onChange: React.PropTypes.func,
    onKeyUp: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
  },

  changeEvent: undefined,

  getDefaultProps() {
    return {
      onChange: () => {},
      onKeyUp: () => {},
      onMouseUp: () => {},
    };
  },

  onChange(event) {
    event.persist();
    this.changeEvent = event;
  },

  onKeyUp(event) {
    if (['ArrowLeft', 'ArrowRight'].indexOf(event.key) > -1) {
      this.props.onChange(this.changeEvent);
    }

    this.props.onKeyUp(event);
  },

  onMouseUp(event) {
    this.props.onChange(this.changeEvent);

    this.props.onMouseUp(event);
  },

  render() {
    var props = extend(
      {},
      this.props,
      {
        type: 'range',
        onChange: this.onChange,
        onKeyUp: this.onKeyUp,
        onMouseUp: this.onMouseUp,
      }
    );

    return React.createElement('input', props);
  },
});
