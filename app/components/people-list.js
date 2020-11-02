import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class PeopleListComponent extends Component {

  @service store;
  @tracked items = this.args.people;
  @tracked showClear = false;
  @tracked query = '';

  @action searchPeople(ev) {
    const query = ev.target.value;
    if(query && query.length >= 3) {
      this.showClear = true;
      this.store.query('people', {
        search: query
      }).then(data => {
        this.items = data ;
      });
    }
  }

  @action clearSearch() {
      this.items = this.args.people;
    this.showClear = false;
    this.query = '';
  }


}
