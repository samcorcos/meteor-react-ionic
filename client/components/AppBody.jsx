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
      <div className="view">
        <div className="scroll-content ionic-scroll">

          <div className="bar bar-header bar-light">
            <Link className="button button-icon icon ion-gear-a" to={`/settings`}></Link>
            <Link className="h1 title" to={'/'}>App Name</Link>
            <Link className="button button-icon icon ion-heart" to={'/other'}></Link>
          </div>

          <RouteHandler />

          <div class="tabs tabs-icon-top">
            <a class="tab-item">
              <i class="icon ion-home"></i>
              Home
            </a>
            <a class="tab-item">
              <i class="icon ion-star"></i>
              Favorites
            </a>
            <a class="tab-item">
              <i class="icon ion-gear-a"></i>
              Settings
            </a>
          </div>

        </div>
      </div>

    )
  }
})
