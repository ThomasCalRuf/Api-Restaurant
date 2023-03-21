const User = require('../models/usersModel');
const TipsPayments = require('../models/tipsPaymentsModel')

exports.listAllUsers = async (req,res)=>{
    try {
        const users = await User.findAll();
        res.status(200);
        res.json(users);
    }
    catch(error){
        console.error(error);
        res.status(500);
        res.json({message: 'Un problème est arrivé lors de la récupération des utilisateurs'});
    }

}

exports.createUser = async (req,res)=>{
    const { firstname, lastname, status, active } = req.body;
    try {
        const user = await User.create({ firstname, lastname, status, active });
        const userid = user.dataValues.id;
        const tipspayments = await TipsPayments.create({amount: 0, id_user: userid});
        res.status(201);
        res.json({ message: 'L\'utilisateur a été créé' });
    }  catch (error) {
        console.error(error);
        res.status(500);
        res.json({ message: 'Un problème est arrivé lors de la création de l\'utilisateur' });
  }   
}

exports.listAUser = async (req,res)=>{
    const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    const tipspayments = await TipsPayments.findOne({where:{id_user : id}});
    if (user && tipspayments) {
      res.status(200);
      res.json({user: user, tipspayments : tipspayments});
    } else {
      res.status(404)
      res.json({ message: 'Utilisateur non trouvé.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ message: 'Un problème est arrivé lors de la récupération de l\'utilisateur.' });
  }    
}

exports.updateAUser = async (req,res)=>{
    const { id } = req.params;
    const { firstname, lastname, status, active } = req.body;
    try {
      const user = await User.findByPk(id);
      if (user) {
        user.firstname = firstname;
        user.lastname = lastname;
        user.status = status;
        user.active = active;
        await user.save();
        res.status(200);
        res.json(user);
      } else {
        res.status(404);
        res.json({ message: 'Utilisateur non trouvé.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500);
      res.json({ message: 'Un problème est arrivé lors de la mise à jour de l\'utilisateur.' });
    }    
}

exports.deleteAUser = async (req,res)=>{
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (user) {
            user.firstname = "Anonyme";
            user.lastname = "";
            user.active = false;
            await user.save();
            res.status(200);
            res.json({ message: 'L\'utilisateur est supprimé avec succès.' });
        } else {
            res.status(404);
            res.json({ message: 'Utilisateur non trouvé.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ message: 'Un problème est arrivé lors de la suppression de l\'utilisateur.' });
    }
}
