import Route from '@ember/routing/route';

export default class PlanetsShowRoute extends Route {
  model(params) {
    return this.store.findRecord('planet',params.planet_id);
  }
}
