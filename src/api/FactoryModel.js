export default class FactoryModel {

  static createHandlerModel(Model, composite) {
    return (result) => {
      try {
        if (composite && Array.isArray(result)) {
          return result.map((item) => new Model(item));
        }
        return new Model(result);
      } catch (error) {
        console.error('Model ERROR', error);
      }

    };
  }
}
