Settings = React.createClass({
  mixins: [ReactMeteorData],
  takePicture() {
    // MeteorCamera.getPicture({}, function(err,res) {
    //   Session.set('photo', res);
    // })
  },
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
        <div>
          <p><input type="button" className="capture" value="Take Photo" onClick={this.takePicture()} /></p>
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
