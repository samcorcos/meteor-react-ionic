AppNotFound = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {

    }
  },
  render() {
    return <span>Not found, dawg</span>
  }
})
