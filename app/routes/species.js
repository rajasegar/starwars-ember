import Route from '@ember/routing/route';

export default class SpeciesRoute extends Route {
  async model() {
    const species = await this.store.findAll('species');
    return { species };
  }
}
