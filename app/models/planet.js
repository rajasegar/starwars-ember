import Model, { attr } from '@ember-data/model';

export default class PlanetModel extends Model {
  @attr name;
  @attr diameter;
  @attr rotation_period;
  @attr orbital_period;
  @attr gravity;
  @attr population;
  @attr climate;
  @attr terrain;
  @attr surface_water;
  @attr films;
  @attr url;
  @attr created;
  @attr edited;
  @attr residents;


}
