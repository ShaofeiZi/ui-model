/**
 * 是否是方法
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isFunction(value: any): boolean {
  return typeof value === 'function';
}

/**
* 是否是undefined
*
* @export
* @param {*} [value]
* @returns {boolean}
*/
export function isUndefined(value?: any): boolean {
  return typeof value === 'undefined';
}

/**
* 是否定义
* JS中未定义的为undefined
* 所以直接调用isUndefined
*
* @export
* @param {*} [value]
* @returns {boolean}
*/
export function isDefined(value?: any): boolean {
  return !isUndefined(value);
}

/**
* 是否是字符串
*
* @export
* @param {*} value
* @returns {boolean}
*/
export function isString(value: any): boolean {
  return typeof value === 'string';
}

/**
* 是否是数字
*
* @export
* @param {*} value
* @returns {boolean}
*/
export function isNumber(value: any): boolean {
  return typeof value === 'number';
}

/**
* 是否是布尔类型
*
* @export
* @param {*} value
* @returns {boolean}
*/
export function isBoolean(value: any): boolean {
  return typeof value === 'boolean';
}

/**
* 是否是时间类型
*
* @export
* @param {*} value
* @returns {boolean}
*/
export function isDate(value: any): boolean {
  return value instanceof Date;
}

/**
* 是否是一个对象
* 单纯的对象不能时方法
* @export
* @param {*} value
* @returns {boolean}
*/
export function isObject(value: any): boolean {
  return value instanceof Object && !isFunction(value);
}

/**
* 是否是数组
*
* @export
* @param {*} value
* @returns {boolean}
*/
export function isArray(value: any): boolean {
  return value instanceof Array;
}

/**
* 是否为空
*
* @export
* @param {*} value
* @returns {boolean}
*/
export function isEmpty(value: any): boolean {
  return !value || value.length === 0 || isObject(value) && Object.keys(value).length === 0;
}
