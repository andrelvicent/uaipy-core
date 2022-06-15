import { BaseError, ErrorParams } from "./BaseError";

export class BadRequest extends BaseError {
  statusCode: number;

  constructor(params: ErrorParams) {
    super(params);
    this.statusCode = 400;
  }
}

export class Unauthorized extends BaseError {
  statusCode: number;

  constructor(params: ErrorParams) {
    super(params);
    this.statusCode = 401;
  }
}

export class Forbidden extends BaseError {
  statusCode: number;

  constructor(params: ErrorParams) {
    super(params);
    this.statusCode = 403;
  }
}