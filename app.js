var dotenv = require( "dotenv" );
dotenv.load();

var SMTP_HOST = process.env.SMTP_HOST,
SMTP_USERNAME = process.env.SMTP_USERNAME,
SMTP_PASSWORD = process.env.SMTP_PASSWORD,
S3_ACCESS_KEY = "";

var 
Hapi = require( "hapi" ),
server = new Hapi.Server( "localhost", 3000 );

server.route({
  method: "GET",
  path: "/",
  handler: function( request, reply ) {
    reply({
      configurations: [{
        smtp_host: SMTP_HOST,
        smtp_username: SMTP_USERNAME,
        smtp_password: SMTP_PASSWORD,
        s3_access_key: S3_ACCESS_KEY
      }]
   });
  }
});

server.start( function() {
  console.log( "Server running at:", server.info.uri );
} );
