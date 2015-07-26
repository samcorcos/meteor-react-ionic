let AppLoading = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {

    }
  },
  render() {
    return <span>App is loading, yo</span>
  }
})
