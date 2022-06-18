import { BadRequest } from ".";
import { ErrorParams } from "./BaseError";

export const deviceAuthenticationError: ErrorParams = 
  {
    code: 'AUTH-INVALID-DATA',
    message: 'Dados Inválidos',
    details: {
      reference: 'Por favor, tente novamente.'
    }
  }
