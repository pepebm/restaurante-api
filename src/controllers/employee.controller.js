import Employee from '../models/user.model';
import bcrypt from 'bcrypt';


export const createEmployee = (req, res) => {
  let e = new Employee({
    name: req.body.name,
    email: req.body.email,
    password: generateHash(req.body.password),
    phone: req.body.phone,
    role: req.body.role
  });
  e.save(err =>
    err ? 
      res.status(406).send('Cannot create Employee: ' + err) : 
      res.status(201).send('Employee Created successfully')
  );
};

export const loginEmployee = (req, res) =>
  Employee.findOne({ email: req.body.email }, (err, e) => {
    try {
      if (!validPwd(req.body.password, e.password)) {
        res.status(406).send('Incorrect credentials, try again.\n' + err);
      } else {
        res.status(200).send("Welcome " + e.name);
      }
    } catch (error) {
      res.status(404).send('EmployeeError: ' + error);
    }
  });

export const updateEmployee = (req, res) =>
  Employee.findOneAndUpdate({ _id: req.params.id }, { $set: req.body },
    (err, e) => 
      err || e === null ? 
        res.status(404).send('EmployeeUpdateError: ' + err) :
        res.status(200).send('Employee updated OK')
  );

export const showEmployee = (req, res) =>
  Employee.findOne({ _id: req.params.id }, 
    (err, e) =>
      err || e === null ?
        res.status(404).send('EmployeeUpdateError: ' + err) :
        res.status(200).send(e)
  );

export const deleteEmployee = (req, res) =>
  Employee.findOneAndDelete({ _id: req.body.id }, (err, e) =>
    err || e === null ?
      res.status(404).send('EmployeeDeleteError: ' + err) :
      res.status(200).send('Employee deleted')
  )

// Helpers
const generateHash = pwd => 
  bcrypt.hashSync(pwd, bcrypt.genSaltSync(8), null);

const validPwd = (pwd, employeePwd) => 
  bcrypt.compareSync(pwd, employeePwd);