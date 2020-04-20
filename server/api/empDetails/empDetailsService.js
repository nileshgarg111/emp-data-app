'use strict';

/**
 * This file is used to control all database operation  .
 * @name empDetailsService.js
 */

const constant = require('../../util/constant');
var EmployeeData = require("./empDetailsModel");

module.exports = class EmpDetailsService {
    /**
     * @description Process the file
     * @param {String} files
     * @param {Object} reqBody
     * @param {Pomise} callback
     */
    processGetData(req) {
        return new Promise((resolve,reject) => {
            try {
                let aggregate_options = [];
                let search = !!(req.query.q);
                let match_regex = {$regex: req.query.q, $options: 'i'}; //use $regex in mongodb - add the 'i' flag if you want the search to be case insensitive.

                //PAGINATION -- set the options for pagination
                const options = {
                    page: parseInt(req.query.page) || 1,
                    limit: parseInt(req.query.limit) || constant.EMP_DATA_ONE_PAGE_DEFAULT,
                    collation: {locale: 'en'},
                };

                //1
                //FILTERING AND PARTIAL TEXT SEARCH -- FIRST STAGE
                if (search) aggregate_options.push({$match: {"name": match_regex}});

                //FILTER BY Company
                if (req.query.company) {
                    aggregate_options.push({
                        $match: {
                            company: req.query.company
                        }
                    });
                }
                //FILTER BY Email
                if (req.query.email) {
                    aggregate_options.push({
                        $match: {
                            email: req.query.email
                        }
                    });
                }

                //SELECT FIELDS
                aggregate_options.push({
                    $project: {
                        _id: 1,
                        name: 1,
                        email: 1,
                        company: 1,
                        phone: 1
                    }
                });
                // Set up the aggregation
                const myAggregate = EmployeeData.aggregate(aggregate_options);
                // const result = await EmployeeData.aggregatePaginate(myAggregate, options);
                EmployeeData.aggregatePaginate(myAggregate, options,function(err,data) {
                    if(err) {
                        reject("Error fetching data");
                    } else {
                        resolve(data);
                    }
                });
            } catch (error) {
                logger.error("Error in Get data", error);
                reject(error);
            }
        });
    }
};
