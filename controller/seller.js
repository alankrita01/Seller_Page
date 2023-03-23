const Seller = require('../models/sellerModel');

//add expense
const postAddProduct = async (req,res,next) => {

  try{
    const amount = req.body.amount;
    const product = req.body.product;
    const category = req.body.category;

    const data = await Seller.create({
      amount: amount,
      product: product,
      category: category
    })
    res.status(201).json({newProductDetails: data});
  }
  catch(err){
    console.log("error occur in Add-product",JSON.stringify(err));
    res.status(500).json({
      error: err
    })
  }
}


//get Seller
const getSeller = async (req,res,next) => {
  try{
    const seller = await Seller.findAll();
    res.status(200).json({allSellers : seller})
  }
  catch(err){
    console.log('Get seller is failing',JSON.stringify(err));
    res.status(500).json({error:err})
  }
}


//delete Seller
const postDeleteSeller = async (req,res,next) =>{
  
  try{
    if(req.params.id == 'undefined'){
      console.log('For delete, seller id is missing');
      return res.status(400).json({err: 'ID is missing'})
    }

    const sId = req.params.id;
    console.log(sId);
    await Seller.destroy({where : {id: sId}});
    res.sendStatus(200);
  }
  catch(err){
    console.log('delete seller is failing', JSON.stringify(err));
    res.status(500).json({
      error:err
    })
  }
}


//edit Seller
const getEditSeller = async (req,res,next) => {
  try{
    if(req.params.id == 'undefined'){
      console.log('For delete, seller id is missing');
      return res.status(400).json({err: 'ID is missing'})
    }

    const sId = req.params.id;
    const seller = await Seller.findOne({where: {id: sId}});

    await seller.save();
    res.sendStatus(200).json({seller});
  }
  catch(err){
    console.log('Edit seller is failing',JSON.stringify(err));
    res.status(500).json({error : err})
  }
}



module.exports ={
  postAddProduct,
  getSeller,
  postDeleteSeller,
  getEditSeller
}