import proxy from ('http-proxy-middleware');
module.exports = function(app){
    app.use(proxy("/email", {target:"http://localhost:3000"}))
}