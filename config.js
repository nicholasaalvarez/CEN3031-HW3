//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there


//Changed uri to what pedro defined for username and password
module.exports = {
  db: {
    uri: 'mongodb://CEN3031:CEN3031TA@ds259732.mlab.com:59732/nickalvarez', //place the URI of your mongo database here.
  }
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */
