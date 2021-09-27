// import {bind} from '../../../src/modules/esl-utils/decorators/bind';

const obj = {
  param: [],
  returns: [],
  typeParams: '',
};

const modifyName = (item) => {
  if(!item.name) return ``;
  let name = item.rest ? "..."+item.name : item.name;
  item.option || item.defaultValue ? name + "?" : name;
  return name;
};

const checkType = (item) => {
  return item.type === 'reflection' &&  !item.declaration?.signatures?
  getReflection(item.declaration?.children) :  item.declaration?.signatures?
  getReflection(item.declaration?.signatures) : item.type === 'array' ?
  item.elementType.name + "[]" : item.typeArguments && item.typeArguments[0].type ===  "reflection"?
  getReflection(item.typeArguments[0].declaration?.signatures) : item.typeArguments && item.typeArguments[0].name ?
  item.name + `&lt;` +item.typeArguments[0].name + `&gt;` : item.types?
  item.types.map(item =>checkType(item)) : item.name ?
  item.name : String(item.value);
};

const getReflection = (items) => {
  obj.typeParams = '';
  obj.param = [];
  obj.returns = [];
  return items ? items.map(item => {
      const parameter = item.parameters? item.parameters.map(item => {
          return {
              rest: item.flags.isRest,
              option: item.flags.isOptional,
              name : item.name,
              type: checkType(item.type),
              defaultValue: item.defaultValue,
              comment: item.comment ? item.comment.text : '',
          }
      }) : [];
      const typeParameter = item.typeParameter ? item.typeParameter.map(item => {
          return{
              name : item.name,
              type: item.type?.name,
          }
      }) : [];
      const returns =  checkType(item.type);
      return {typeParameter, parameter, returns, comment: item.comment, name: item.name, defaultValue: item.defaultValue}
  }) : [];
};

const checkDefVal = (item) => item.defaultValue ? `=` + item.defaultValue : ``;

const checkParam = (item) => {
  const parameters = item.parameter ? item.parameter.map(a => `${modifyName(a)}: ${Array.isArray(a.type) ? a.type.join(` | `) : a.type}${checkDefVal(a)}`) : [];
  return `(${parameters.join(', ')}) => ${Array.isArray(item.returns) ?  item.returns.join(` | `) : item.returns}`;
};

const bindCreateParam = (item, type) => {
  item.type = Array.isArray(item) ? item : item.type;
  const name = modifyName(item);
  const str = `${ name ? name + ":" : '' } ${ typeof item === "string"? item : item.parameter ?
  checkParam( item ) : item.type[0].parameter ?
  checkParam( item.type[0] ) : Array.isArray(item.type) ?
  item.type.join(` | `) : item.type }`
  type === "params"? obj.param.push(str) : obj.returns.push(str);
  return str;
};

const checkObj = (item) => {
  return typeof item === 'object' && item !== null
}

module.exports = {
  createTapeParam(item){
    const str = `${item.name}${ item.type ? `:` +  item.type: ``}`
    obj.typeParams = str;
    return `<li>${str}</li>`
  },

  createSignature(){
    const str = `${obj.typeParams}(${obj.param.join(", ")}): ${obj.returns.join(' | ')} `
    obj.typeParams = '';
    obj.param = [];
    obj.returns = [];
    return str;
  },

  modifyName(item){
    let name = item.rest ? "..."+item.name : item.name;
    item.option || item.defaultValue ? name + "?" : name;
    return name;
  },

  // @bind
  createParam: bindCreateParam,

  getSignature(item){
    return  getReflection(item);
  },

  checkSignature (item){
    return item.getSignature ? getReflection(item.getSignature) : getReflection(item.setSignature);
  },

  createParamAcces(items){
    if(checkObj(items[0])) return '{' + items.map(item => item.name + ':' + item.returns).join('; ') + '}';
    return bindCreateParam(items);
  },

  checkObj: checkObj,
}
// module.exports.createParam = module.exports.createParam.bind(module.exports)