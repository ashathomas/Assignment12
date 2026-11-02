const validateInventory=(req,res,next)=>{
    const {name,quantity,price}=req.body;
    if(!name || !quantity || !price){
        return res.status(400).send({message:'All fields are required'});
    }
    next();
}
module.exports=validateInventory;