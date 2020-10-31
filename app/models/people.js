import Model, { attr} from '@ember-data/model';

export default class PeopleModel extends Model {

  @attr name;
  @attr height;
  @attr mass;
  @attr hair_color;
  @attr skin_color;
  @attr eye_color;
  @attr birth_year;
  @attr gender;
  @attr homeworld;
  @attr films;
  @attr species;
  @attr vehicles;
  @attr starships;
  @attr created;
  @attr edited;
  @attr url;
}
