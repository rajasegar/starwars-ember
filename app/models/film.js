import Model, { attr } from '@ember-data/model';

export default class FilmModel extends Model {
@attr title;
@attr episode_id ;
@attr opening_crawl;
@attr director ;
@attr producer;
@attr release_date;
@attr species ;
@attr starships;
@attr vehicles;
@attr characters;
@attr planets;
@attr url;
@attr created;
@attr edited;
}
