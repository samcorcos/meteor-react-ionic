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
      return (
        <div className="item item-avatar" key={Random.hexString(24)}>
          <img src="http://placekitten.com/g/200/300"></img>
          <h2>{name}</h2>
        </div>
      )
    })
    return (
      <div className="list">
        {list}
      </div>
    )
  }
})
