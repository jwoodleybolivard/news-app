import { validationResult } from 'express-validator';

// Middleware para validar la entrada de datos
const validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export default validateInput;
