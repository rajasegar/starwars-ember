import Route from '@ember/routing/route';

export default class StarshipsShowRoute extends Route {
  model(params) {
    return this.store.findRecord('starship',params.starship_id);
  }
}
