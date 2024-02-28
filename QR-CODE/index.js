const Qr = require ("qrcode");

let data = {
   
     "name": "Anbu ",
 
     "id":"2113"
   
};

let stJson = JSON.stringify(data)
Qr.toDataURL(stJson,function(err,code)
{
    if(err) return console.log("error")
    console.log(code);
})
