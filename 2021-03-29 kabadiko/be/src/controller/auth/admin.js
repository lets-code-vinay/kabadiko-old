const Admin = require('../../models/users/admin');
const jwt = require('jsonwebtoken');
//const {  sendMailToUser } = require('../utils/nodemailer') 

//---------admin signup/login start ----------
exports.adminSignup = (req, res) => {
    Admin.findOne({ email: req.body.email })
        .exec((error, adminUser) => {
            //if adminUser existed
            if (adminUser) return res.status(400).json({
                message: 'Admin is already registered'
            });

            const { firstName,
                lastName,
                email,
                password
            } = req.body;

            const year = new Date();
            const getYear = year.getFullYear();
            const _admin = new Admin({
                firstName,
                lastName,
                email,
                password,
                role: 'admin',
                userID: ('AD' + getYear + Math.floor(Math.random() * 100).toString()),
                activationToken: jwt.sign({ id: Math.random(),  },
                
                    process.env.TEMP_TOKEN_SECRET, { expiresIn: 1000 * 1000 * 60 }),
            });
            // console.log('checking super admin user', _admin)

            _admin.save((error, data) => {
                // console.log('if me data super admin--', data, 'error---', error)
                if (data) {
                    return res.status(202).json({
                        message: "Admin created successfully",
                        adminUser: data
                    });
                }
                if (error) {
                    if (error.name === "SequelizeValidationError")
                        return res.status(400).send(`error: ${error.message}`);
                }
            });
        });
}

exports.adminSignin = (req, res) => {
    Admin.findOne({ email: req.body.email })
        .exec((error, adminUser) => {
            if (error) {
                return res.status(400).json({ error }).send(`error: ${error.message}`);
            }
            if (adminUser) {
                if (adminUser.authenticate(req.body.password) && adminUser.role === 'admin') {
                    const token = jwt.sign({ _id: adminUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    const { _id, firstName, lastName, email, role, fullName } = adminUser;
                    res.status(200).json({
                        token,
                        adminUser: {
                            _id, firstName, lastName, email, role, fullName
                        }
                    });
                }
            } else {
                return res.status(400).json({ message: 'Something went wrong' })
            }
        })
}
//---------admin signup/login end ----------
