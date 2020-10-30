import EmberRouter from '@ember/routing/router';
import config from 'swapi-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('people', function() {
    this.route('show', { path: '/:people_id' });
  });
  this.route('planets');
});
