import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PeopleController extends Controller {
  @action searchPeople(ev) {
    console.log(ev);
    const query = ev.target.value;
    if(query && query.length >= 3) {
      this.store.query('people', {
        filter: { search: query }
      }).then(data => {
        console.log(data);
        this.model = { people: data };
      });
    }
  }
}
