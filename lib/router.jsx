const {
  Route,
  NotFoundRoute,
  DefaultRoute
} = ReactRouter;

const routes = (
  <Route name="app" handler={App} path="/">
    <Route name="map" path="/map" handler={Map} />
    <Route name="settings" path="/settings" handler={Settings} />
    <DefaultRoute handler={AppLoading} />
    <NotFoundRoute handler={AppNotFound} />
  </Route>
)

const router = ReactRouter.create({
  routes: routes,
  location: ReactRouter.HistoryLocation
});

Meteor.startup(function () {
  router.run(function (Handler, state) {
    React.render(<Handler/>, document.getElementById("app"));
  });
});
