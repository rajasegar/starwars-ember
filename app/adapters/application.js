import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = "https://swapi.dev/api";
  headers = {
    'accept': 'application/json',
  };
}
