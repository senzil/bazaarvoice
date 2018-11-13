/**
 * Created by pablo on 2/9/16.
 */

'use strict';

import AbstractFilter from './AbstractFilter';

export default class Operator extends AbstractFilter {

  constructor(filter){
    super(filter);
    this.next = function next(){
      throw new Error('You must set a value for the filter');
    };
  }

  equalTo(value) {
    return this.filter += `:eq${this.setvalue(value)}`;
  }

  greaterThan(value) {
    return this.filter += `:gt${this.setvalue(value)}`;
  }

  greaterOrEqualThan(value) {
    return this.filter += `:gte${this.setvalue(value)}`;
  }

  lessThan(value) {
    return this.filter += `:lt${this.setvalue(value)}`;
  }

  lessOrEqualThan(value) {
    return this.filter += `:lte${this.setvalue(value)}`;
  }

  notEqualTo(value) {
    return this.filter += `:neq${this.setvalue(value)}`;
  }
}