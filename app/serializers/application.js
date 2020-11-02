import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeArrayResponse( store, primaryModelClass, payload, id, requestType)  {
    const newPayload = {};
    newPayload.data = payload.results.map((r,index) => {
      const temp = {};
      temp.attributes = r;
      temp.type = primaryModelClass.modelName;
      temp.id = ++index;
      return temp;
    });

    return newPayload;

  }

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = {};
    newPayload.data = {};
    newPayload.data.type = primaryModelClass.modelName;
    newPayload.data.id = id;
    newPayload.data.attributes = payload;
    return newPayload;
  }
}
