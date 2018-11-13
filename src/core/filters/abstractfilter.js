/**
 * Created by pablo on 5/9/16.
 */

'use strict';

export default class AbstractFilter {

  constructor(filter){
    this.filter = filter;
    this.next = function next(_this) {
      throw new Error(`You must override the next type for fluent api in ${_this.constructor.name}`);
    };
    this.setvalue = function setvalue(value) {
      if(!value){
        return this.next(this);
      }
      if(Array.isArray(value)) {
        this.filter += `:${value.join(',')}`;
      }
      if(value instanceof Date && !isNaN(+value)) {
        this.filter += `:${value.getTime().toString()}`;
      }
    };
  }

  toString() {
    return this.filter;
  }
}