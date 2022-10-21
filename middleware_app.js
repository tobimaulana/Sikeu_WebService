var appToken = function(req, res, next) {
       var token = req.header("app_token");

       if(token) {
              if(token == "TokenKeamanan123") {
                     next();
              } else {
                     res.json({
                            status:false,
                            pesan: "app_token TIDAK VALID!",
                            data:[]
                     });
              }
       } else {
              res.json({
                     status:false,
                     pesan: "Maaf, tidak membawa app_token",
                     data:[]
              });
       }
}

module.exports = appToken;  