const Service = require('../models/serviceModel');
const ServiceUser = require('../models/serviceUsersModel');

exports.listAllServices = async (req,res)=>{
    try {
        const services = await Service.findAll();
        res.status(200);
        res.json(services);
    }
    catch(error){
        console.error(error);
        res.status(500);
        res.json({message: 'Un problème est arrivé lors de la récupération des services'});
    }

}

exports.createService = async (req,res)=>{
    const { shiftType, shiftClosed, usersid } = req.body;

    try {
        const service = await Service.create({  shiftType, shiftClosed });
        const id_service = service.dataValues.id;
        const userid = usersid.split(',');
        userid.forEach(id_user => {
            const serviceusers = ServiceUser.create({id_service , id_user});
        });
        res.status(201).json(service);
    }  catch (error) {
        console.error(error);
        res.status(500);
        res.json({ message: 'Un problème est arrivé lors de la création du service' });
    }   
}

exports.updateAService = async (req,res)=>{
    const { id } = req.params;
    const { shiftType, shiftClosed ,usersid} = req.body;
    try {
        const service = await Service.findByPk(id);
        await ServiceUser.destroy({where:{id_service: id}});
        if (service) {
            service.shiftType = shiftType;
            service.shiftClosed = shiftClosed;
            const userid = usersid.split(',');
            userid.forEach(id_user => {
                const serviceusers = ServiceUser.create({id_service: id , id_user});
            });
            await service.save();
            res.status(200);
            res.json(service);
        } else {
            res.status(404);
            res.json({ message: 'Service non trouvé.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ message: 'Un problème est arrivé lors de la mise à jour du service.' });
    }    
}

exports.listAService = async (req,res)=>{
    const { id } = req.params;
    try {
        const service = await Service.findByPk(id);
    if (service) {
        res.status(200);
        res.json(service);
    } else {
        res.status(404)
        res.json({ message: 'Service non trouvé.' });
    }
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ message: 'Un problème est arrivé lors de la récupération du service.' });
    }    
}


exports.deleteAService = async (req,res)=>{
    const { id } = req.params;
    try {
        const service = await Service.findByPk(id);
        if (service) {
            await service.destroy();
            await ServiceUser.destroy({where:{id_service: id}});
            res.status(200);
            res.json({ message: 'Le service est supprimé avec succès.' });
        } else {
            res.status(404);
            res.json({ message: 'Service non trouvé.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ message: 'Un problème est arrivé lors de la suppression du service.' });
    }
}