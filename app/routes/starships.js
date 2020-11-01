import Route from '@ember/routing/route';

export default class StarshipsRoute extends Route {
  async model() {
    const starships = await this.store.findAll('starship');
    return { starships };
  }
}
