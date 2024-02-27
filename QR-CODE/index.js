const Qr = require ("qrcode");

let data = {
    "Title":"Happy Valentine's Day",
     "name": "Vidhu love u Mah ",
     "class":" Always for u mah...",
     "id":"143"
   
};

let stJson = JSON.stringify(data)
Qr.toDataURL(stJson,function(err,code)
{
    if(err) return console.log("error")
    console.log(code);
})