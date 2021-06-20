const {check, validationResult} = require('express-validator');

exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .isLength({min: 2})
    .withMessage('First Name should have minimum 2 characters'),

    check('lastName')
    .notEmpty()
    .isLength({min:2})
    .withMessage('Last name should have atleast 2 characters or long'),

    check('email')
    .notEmpty()
    .isEmail()
    .isLength({min:2})
    .withMessage("Email is mandatory"),

    check('password')
    .notEmpty()
    .isLength({min: 6})
    .withMessage('Password must be at least 6 characters long')
];

exports.validateSigninRequest=[
    check('email')
    .isLength({min: 2})
    .notEmpty()
    .isEmail()
    .withMessage('Enter a valid Email address'),

    check('password')
    .isLength({min: 6})
    .notEmpty()
    .withMessage('Enter a valid password')
];

exports.isRequestValidated = (req, res, next) =>{
    const errors = validationResult(req);
    if(errors.array().length > 0 ){
        return res.status(400).json({error: errors.array()[0].msg})
    }
    next();
}