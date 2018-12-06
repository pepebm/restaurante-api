import User from '../models/user.model';
import bcrypt from 'bcrypt';


export const createUser = (req, res) => {
  let usr = new User({
    name: req.body.name,
    email: req.body.email,
    password: generateHash(req.body.password)
  });
  usr.save(err =>
    err ? 
      res.status(406).send('Cannot create user: ' + err) : 
      res.status(201).send('User Created successfully')
  );
};

export const loginUser = (req, res) =>
  User.findOne({ email: req.body.email }, (err, user) => {
    try {
      if (!validPwd(req.body.password, user.password)) {
        res.status(406).send('Incorrect credentials, try again.');
      } else {
        res.status(200).send("Welcome " + user.name);
      }
    } catch (error) {
      res.status(404).send('UserError: ' + error);
    }
  });

export const updateUser = (req, res) =>
  User.findOneAndUpdate({ id: req.params.id }, { $set: req.body },
    (err, usr) => 
      err || usr === null ? 
        res.status(404).send('UserUpdateError: ' + err) :
        res.status(200).send('User updated OK')
  );

export const showUser = (req, res) => {
  User.findOne({ _id: req.params.id }, 
    (err, usr) => {
      console.log(usr);
      err || usr === null ?
        res.status(404).send('UserUpdateError: ' + error) :
        res.status(200).send(usr)
      }
  );
}
// Helpers
const generateHash = pwd => 
  bcrypt.hashSync(pwd, bcrypt.genSaltSync(8), null);

const validPwd = (pwd, userPwd) => 
  bcrypt.compareSync(pwd, userPwd);