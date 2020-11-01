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
  this.route('planets', function() {
    this.route('show', { path: '/:planet_id' });
  });
  this.route('films', function() {
    this.route('show', { path: '/:film_id' });
  });
  this.route('vehicles', function() {
    this.route('show', { path: '/:vehicle_id' });
  });
  this.route('species', function() {
    this.route('show', { path: '/:species_id' });
  });
  this.route('starships', function() {
    this.route('show', { path: '/:starship_id' });
  });
});
