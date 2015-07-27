Other = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {

    }
  },
  getInitialState() {
    return {
      likes: ["Bob", "John","Tom","Jerry"]
    }
  },
  render() {
    let list = this.state.likes.map(function(name) {
      return (<div className="item">{name}</div>)
    })
    return (
      <div className="list">
        {list}
      </div>
    )
  }
})
