Settings = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  render() {
    return (
      <div>
        <div className="settings-header">
          <div className="settings-avatar"></div>
        </div>
        <div className="list">
          <h1 className="item">Settings 1</h1>
          <h1 className="item">Settings 2</h1>
          <h1 className="item">Settings 3</h1>
        </div>
      </div>

    )
  }
})

//        <div className="settings-username">{this.data.currentUser.username}</div>
