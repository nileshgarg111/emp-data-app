'use strict';

/**
 * This file is used as database model handle all requst data. .
 * @name empDetailsModel.js
 */

/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
/**
 * employeeDataSchema schema
 */

const employeeDataSchema = new Schema({
  name: { type: String, default: '' },
  phone: { type: Number, default: '' },
  email: { type: String, default: '' },
  company: { type: String, default: '' }
},{ collection : 'employeeData' });

employeeDataSchema.plugin(aggregatePaginate);

module.exports = mongoose.model('employeeData', employeeDataSchema);
