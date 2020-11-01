import Model, { attr } from '@ember-data/model';

export default class SpeciesModel extends Model {
    @attr name ;
    @attr classification ;
    @attr designation ;
    @attr average_height ;
    @attr average_lifespan ;
    @attr eye_colors ;
    @attr hair_colors ;
    @attr skin_colors ;
    @attr language ;
    @attr homeworld ;
    @attr people ;
    @attr films ;
    @attr url ;
    @attr created ;
    @attr edited ;
}
