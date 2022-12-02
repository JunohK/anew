const mysql = require('mysql2')

const pool = mysql.createPool(
	{
		// Mysql Connection Info
		// rds
		// host=database-1.ckmramcwt7zl.ap-northeast-2.rds.amazonaws.com,
		// ec2 ubuntu
		host : "15.164.184.253",
		port : "3306",
		user : "mysql",
		password : "1234",
		database : "testdb"
	}
)
const promisePool = pool.promise()

module.exports = promisePool;
