import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'swapi-ember/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = config.host;
  headers = {
    'accept': 'application/json',
  };
}
