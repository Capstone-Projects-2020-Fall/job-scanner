function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

/* MongoDB configuartion needed for user authentication */
const database_path = "mongodb://localhost/";
const database_name = "jobscanner";
define('database', database_path + database_name);
define('database_name', database_name);


define('host','localhost'); //Not implemented yet
define('port', 3000); //Not implemented yet
define('redisHost', 'localhost'); //Not implemented yet
define('redisPort', '6379'); //Not implemented yet


