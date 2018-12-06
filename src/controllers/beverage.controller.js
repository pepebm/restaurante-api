import Beverage from '../models/beverage.model';


export const createBeverage = (req, res) => {
  let bev = new Beverage({
    name: req.body.name,
    price: req.body.price,
    alcohol: req.body.alcohol,
    size: req.body.size,
    price: req.body.price,
    stock: req.body.stock,
    kcal: req.body.kcal
  });

  bev.save(err =>
    err ? next(err) : res.status(201).send('Beverage Created successfully')
  );
};

export const showBeverage = (req, res) =>
  Beverage.findById(req.params.id, 
    (err, bev) => err ? next(err) : res.send(bev)
  );

export const updateBeverage = (req, res) =>
  Beverage.findByIdAndUpdate(req.params.id, { $set: req.body },
    (err, bev) => err ? next(err) : res.status(200).send('Beverage updated')
  );

export const deleteBeverage = (req, res) => 
  Beverage.findByIdAndDelete(req.params.id, 
    err => err ? next(err) : res.status(200).send('Deleted')
  );