const {
  Link,
  Navigation,
  State,
  RouteHandler
} = ReactRouter;

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

AppBody = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {

    }
  },
  render() {
    return (
      <div className="ionic-body">

        <div className="bar bar-header bar-light">
          <Link className="button button-icon icon ion-gear-a" to={`/settings`}></Link>
          <Link className="h1 title" to={'/'}>App Name</Link>
          <Link className="button button-icon icon ion-heart" to={'/other'}></Link>
        </div>

        <div className="view">
          <div className="scroll-content ionic-scroll">
            <div className="content overflow-scroll has-header">

              <ReactCSSTransitionGroup transitionName="trans">
                <RouteHandler />
              </ReactCSSTransitionGroup>

            </div>
          </div>

        </div>
      </div>

    )
  }
})

// // Use this if you want tabs // //
// <div className="tabs tabs-icon-top">
//   <a className="tab-item">
//     <i className="icon ion-home"></i>
//     Home
//   </a>
//   <a className="tab-item">
//     <i className="icon ion-star"></i>
//     Favorites
//   </a>
//   <a className="tab-item">
//     <i className="icon ion-gear-a"></i>
//     Settings
//   </a>
// </div>
