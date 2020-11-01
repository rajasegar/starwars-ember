import ApplicationSerializer from './application';

export default class PlanetSerializer extends ApplicationSerializer {

  normalizeFindAllResponse( store, primaryModelClass, payload)  {
    const obj = {};
    obj.data = payload.results.map((r,index) => {
      const temp = {};
      temp.attributes = r;
      temp.type = primaryModelClass.modelName;
      temp.id = ++index;
      return temp;
    });

    return obj;
  }

  normalizeSingleResponse(store, primaryModelClass, payload, id) {
    const obj = {};
    obj.data = {};
    obj.data.type = primaryModelClass.modelName;
    obj.data.id = id;
    obj.data.attributes = payload;
    return obj;
  }
}
