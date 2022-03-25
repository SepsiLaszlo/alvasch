
module.exports = function setVariables(req,res,next){
    res.variables = {stylesheet: '/static'+req.path+'.css'}
    next()
}
