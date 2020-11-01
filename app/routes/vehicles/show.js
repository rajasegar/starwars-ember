import Route from '@ember/routing/route';

export default class VehiclesShowRoute extends Route {
  model(params) {
    return this.store.findRecord('vehicle',params.vehicle_id);
  }
}
