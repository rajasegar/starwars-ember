import Model, { attr } from '@ember-data/model';

export default class StarshipModel extends Model {


@attr    name ;
    @attr model;
    @attr starship_class;
    @attr manufacturer;
    @attr cost_in_credits;
    @attr length;
    @attr crew ;
    @attr passengers ;
    @attr max_atmosphering_speed ;
    @attr hyperdrive_rating ;
    @attr MGLT ;
    @attr cargo_capacity ;
    @attr consumables ;
    @attr films ;
    @attr pilots ;
    @attr url ;
    @attr created ;
    @attr edited ;
}
