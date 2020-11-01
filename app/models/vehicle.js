import Model, { attr } from '@ember-data/model';

export default class VehicleModel extends Model {
@attr name ;
@attr model;
@attr vehicle_class;
@attr manufacturer;
@attr length ;
@attr cost_in_credits;
@attr crew;
@attr passengers ;
@attr max_atmosphering_speed;
@attr cargo_capacity ;
@attr consumables ;
@attr films ;
@attr pilots ;
@attr url ;
@attr created ;
@attr edited ;
}
