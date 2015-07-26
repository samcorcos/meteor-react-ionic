const {
  Link,
  Navigation,
  State,
  RouteHandler
} = ReactRouter;

AppBody = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      // currentUser: Meteor.user()
    }
  },
  render() {
    return (
      <div className="ion-view">
        <div className="ion-content">

          <div className="bar bar-header bar-light">
            <Link className="button button-icon icon ion-gear-a" to={`/settings`}></Link>
            <div className="h1 title">App Name</div>
            <button className="button button-icon icon ion-heart" onClick=""></button>
          </div>

        </div>
      </div>
    )
  }
})

// <button className="button button-icon icon ion-navicon"></button>
