/**const Joi=require('@hapi/joi');

Register validation
const registerValidation=data=>
{
    const schema={
        name:Joi.string()
        .min(6)
        .required(),
        email:Joi.string()
        .min(6)
        .required(),
        password:Joi.string()
        .min(6)
        .required(),
    };
    return Joi.validate(data,schema);

};
const LoginValidation =data=>
{
    const schema={
        name:Joi.string()
        .min(6)
        .required(),
        email:Joi.string()
        .min(6)
        .required(),
        password:Joi.string()
        .min(6)
        .required(),
    };
    return Joi.validate(data,schema);

};
 //** */