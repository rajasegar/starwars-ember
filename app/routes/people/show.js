import Route from '@ember/routing/route';

export default class PeopleShowRoute extends Route {
  model(params) {
    return this.store.findRecord('people',params.people_id);
  }
}
