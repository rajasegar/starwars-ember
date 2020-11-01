import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class PeopleRoute extends Route {
  async model() {
    const people = await this.store.findAll('people');
    return { people };
  }

  @action searchPeople(ev) {
    console.log(ev);
  }
}
