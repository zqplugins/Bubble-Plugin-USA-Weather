async function(properties, context) {
  let NWS = require("nws-api-wrapper");
    
  return context.v3.async(async (callback) => { 
    let status = await NWS.getStatus();      
    callback(null, { status : status.statusText });
  }); 
}