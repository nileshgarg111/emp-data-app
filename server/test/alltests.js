/**
 * Created by hasnen on 11/4/17.
 */

process.env.key = process.argv[4];
process.env.db_url = process.argv[5];
process.env.db_username = process.argv[6];
process.env.db_password = process.argv[7];
process.env.db_database = process.argv[8];
global.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVhZGQzZWUyMjE1N2U3NGJlMzMxYzJjNSIsImVtYWlsIjoiSm9obkBnbWFpbC5jb20iLCJsb2dpblR5cGUiOiJNYW51YWwifQ.Lrvol4sELy3xEhRmEdSgF12SnIViWNPhFOXrluMAaq4';
require('./start');
require('./article/index');
require('./stop');

