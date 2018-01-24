# Interactive-gdpr-opt-in
Interactive template for the GDPR opt-in campaign

## Usage

    npm run watch
  
Will compile all the files + start the (very poor) preview webserver

    npm run release
  
Will send whatever you got to S3, live, in production (make sure you built a css file with watch first!) If you screw up just roll back the last version straight from S3. Version numbers are updated at about every hour
