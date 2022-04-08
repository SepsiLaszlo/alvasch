
// TODO: refactor with res.locals


module.exports = function setVariables(req,res,next){
    res.variables = {stylesheet: '/static/'+req.path.split('/')[1]+'.css'}
    next()
}
