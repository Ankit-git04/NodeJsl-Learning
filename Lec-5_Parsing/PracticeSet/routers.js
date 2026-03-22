const home=require('./home');
const cal=require('./calculator');
const results=require('./results');

const routers=(req,res)=>{
    if(req.url==='/'){
        return home(req,res);
    }
    else if(req.url==='/calculator'){
        return cal(req,res);
    }
    else if(req.url==='/form-submit' && req.method==='POST'){
        return results(req,res);
    }
}
module.exports=routers;