const RestaurantTable = require('../models/restaurantTableModel');
const TableTips = require('../models/tableTipsModel');

exports.listAllTables = async (req,res)=>{
    const { id_service } = req.params;
    try {
    
        const tablesWithTips = await TableTips.findAll({
          where: { id_service },
          include: {
            model: RestaurantTable,
            required: false 
          }
        });
    
        res.status(200).json(tablesWithTips);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des tables.' });
      }

}

exports.createTable = async (req,res)=>{
    try {
        const { id_service } = req.params;
        const { name, tips } = req.body;
    
        const [restaurantTable, created] = await RestaurantTable.findOrCreate({
          where: { name: name },
          defaults: { name: name }
        });
    
        await TableTips.create({tips, id_restaurantTable: restaurantTable.id, id_service});
    
        if (created) {
          res.status(201).json({ message: 'La table et ses tips ont été créés avec succès.'});
        } else {
          res.status(200).json({ message: 'Les tips ont été ajoutés à la table existante avec succès.' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Une erreur est survenue lors de la création de la table et de ses tips.' })
      }
}

exports.listATips = async (req, res)=>{
  const { id } = req.params
  try {
    
    const tablesWithTips = await TableTips.findByPk( id,{
      include: {
        model: RestaurantTable,
        required: false 
      }
    });

    res.status(200).json(tablesWithTips);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de la table.' });
  }
}

exports.updateTips = async (req,res)=>{
    const { id } = req.params;
    const { name, tips} = req.body;
    try {
        const tabletips = await TableTips.findByPk(id);
        const [restaurantTable, created] = await RestaurantTable.findOrCreate({
            where: { name: name },
            defaults: { name: name }
        });
        if (tabletips) {
            tabletips.tips = tips;
            tabletips.dataValues.id_restaurantTable = restaurantTable.dataValues.id;
            await tabletips.save();
            res.status(200);
            res.json(tabletips);
        } else {
            res.status(404);
            res.json({ message: 'Tips non trouvé.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ message: 'Un problème est arrivé lors de la mise à jour du tips.' });
    }    
}

exports.deleteTips= async (req,res)=>{
    const {id} = req.params;
    try{
        const tabletips = await TableTips.findByPk(id);
        if(tabletips){
            await tabletips.destroy();
            res.status(200);
            res.json({ message: 'Le tips est supprimé avec succès.' });
        } else {
            res.status(404);
            res.json({ message: 'Tips non trouvé.' });
        }
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({message: "Un problème est arrivé lors du delete du tips"})
    }
}
