// const {
//   Link,
//   Navigation,
//   State,
//   RouteHandler
// } = ReactRouter;

AppBody = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      // currentUser: Meteor.user()
    }
  },
  render() {
    return (
      <span>Hello App</span>
    )
  }
})
