import Component from '@glimmer/component';

export default class LinkToPageComponent extends Component {

  get links() {
    const items = [].concat(this.args.items);
    const models = items.map(i => {
      const temp = i.replace('http://swapi.dev/api/','');
      const [route,id] = temp.split('/');
      return {
        route: `${route}.show`,
        model: id,
        p: fetch(i).then(r => r.json())
      };
    });

    const ps = models.map(m => m.p);

    return Promise.all(ps).then(values => {
      return values.map((m,index) => {
        return {
          route: models[index].route,
          model: models[index].model,
          text: m.name
        };
      });
    });

  }
}
