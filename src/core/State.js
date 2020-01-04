export default class State {
    constructor(value, action = value => value) {
      this.value = {value};
      this.proxy = changeable(this.value, action)
    }
  
    getValue() {
      return this.proxy.value.value;
    }
  
    setValue(value) {
      this.proxy.value = {value};
      return this;
    }
  
    setAction(action = value => value) {
      this.proxy = changeable(this.value, action)
  
      return this;
    }
  }
  
  const changeable = (object, onChange) => {
      const handler = {
          get(target, property, receiver) {
              try {
                  return new Proxy(target[property], handler);
              } catch (err) {
                  return Reflect.get(target, property, receiver);
              }
          },
          defineProperty(target, property, descriptor) {
              onChange(descriptor.value.value);
              return Reflect.defineProperty(target, property, descriptor);
          },
          deleteProperty(target, property) {
              onChange();
              return Reflect.deleteProperty(target, property);
          }
      };
  
      return new Proxy(object, handler);
  };