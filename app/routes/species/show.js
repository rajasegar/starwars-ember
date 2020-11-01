import Route from '@ember/routing/route';

export default class SpeciesShowRoute extends Route {
  model(params) {
    return this.store.findRecord('species',params.species_id);
  }
}
