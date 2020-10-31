import Route from '@ember/routing/route';

export default class PlanetsShowRoute extends Route {
  model(params) {
    return this.store.peekRecord('planet',params.planet_id);
  }
}
