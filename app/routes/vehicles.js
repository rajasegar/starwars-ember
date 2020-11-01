import Route from '@ember/routing/route';

export default class VehiclesRoute extends Route {
  async model() {
    const vehicles = await this.store.findAll('vehicle');
    return { vehicles };
  }
}
