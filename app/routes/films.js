import Route from '@ember/routing/route';

export default class FilmsRoute extends Route {
  async model() {
    const films = await this.store.findAll('film');
    console.log(films);
    return { films };
  }
}
