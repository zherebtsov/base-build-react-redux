export class CommonModel {

  setStringParam = (param) => {
    return param ? String(param) : '';
  };

  setNumberParam = (param) => {
    return param ? Number(param) : 0;
  };

  checkObjectKey = (object, key) => {
    if (key === undefined) {
      return typeof object === 'object';
    }
    return object.hasOwnProperty(key);
  }
}
