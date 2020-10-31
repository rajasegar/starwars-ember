import Route from '@ember/routing/route';

export default class PlanetsRoute extends Route {
  async model() {
    const planets = await this.store.findAll('planet');
    console.log(planets);
    return { planets };
  }
}
