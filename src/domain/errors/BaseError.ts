export class BaseError extends Error {
  params: ErrorParams;

  constructor(params: ErrorParams) {
    super();
    this.params = params;
  }
}

export type ErrorParams = {
  code: string,
  message: string,
  details?: {
    reference: string
  }
}