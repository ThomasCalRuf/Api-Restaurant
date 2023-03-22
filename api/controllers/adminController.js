const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");

exports.login = (req,res)=>{
    Admin.findOne({where:{pincode: req.body.pincode}}).then((data,error)=>{
        if(error || data == null){
            res.status(500);
            console.log(error);
            res.json({message: "Utilisateur inconnue"});
        }else {
            if(data.pincode == req.body.pincode){
                jwt.sign(data.dataValues, process.env.JWT_KEY, {expiresIn: "30days"}, (error, token)=> {
                    if(error){
                        res.status(500);
                        console.log(error);
                        res.json({message: `Impossible de génerer le token`});
                    }
                    else{
                        res.status(200);
                        res.json({token});
                    }
                })
            }else{
                res.status(401);
                console.log(error);
                res.json({message : "Mot de passe incorrect"});
            }
        }
    })
}