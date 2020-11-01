import Component from '@glimmer/component';
import pMap from 'p-map';


export default class LinkToPageComponent extends Component {

  get links() {
    const items = [].concat(this.args.items);
    const mapper = url => {
      return fetch(url).then(r => r.json());
    };
    const models = items.map(i => {
      const temp = i.replace('http://swapi.dev/api/','');
      const [route,id] = temp.split('/');
      return {
        route: `${route}.show`,
        model: id
      };
    });

    return pMap(items, mapper, { concurrency: 4 }).then(values => {
      return values.map((m,index) => {
        return {
          route: models[index].route,
          model: models[index].model,
          text: m.name || m.title || 'Link'
        };
      });
    });

  }
}
