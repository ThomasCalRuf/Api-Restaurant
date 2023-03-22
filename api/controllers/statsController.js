const { Sequelize } = require("sequelize");
const TableTips = require("../models/tableTipsModel");

exports.month = async (req, res)=>{
    const {month} = req.params;
    console.log(month);
    try{
        const totalTips = await TableTips.sum('tips', {
            where: Sequelize.where(
              Sequelize.fn('month', Sequelize.col('created_at')), month
            )
          });
        console.log(totalTips);
        res.status(200);
        res.json({Somme_Total_du_mois :totalTips});
    }catch{
        console.log(error);
        res.status(500);
        res.json({ message: 'Un problème est arrivé lors de la récupération de la stat du mois'});
        
    }
}