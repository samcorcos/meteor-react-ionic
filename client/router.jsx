const {
  Route,
  NotFoundRoute,
  DefaultRoute
} = ReactRouter;

const routes = (
  <Route name="root" handler={AppBody}>
    <Route name="home" path="/" handler={Home} />
    <Route name="other" path="/other" handler={Other} />
    <Route name="settings" path="/settings" handler={Settings} />
    <DefaultRoute handler={AppLoading} />
    <NotFoundRoute handler={AppNotFound} />
  </Route>
)

// const router = ReactRouter.create({
//   routes: routes,
//   location: ReactRouter.HistoryLocation
// });

Meteor.startup(function () {
  ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Handler, state) {
    React.render(<Handler/>, document.getElementById("app"));
  });
});
