export const errors = {
  NOT_IMPLEMENTED: "Not implemented!",
};

export default class CustomError extends Error {
  static message: string;

  constructor(message: string) {
    super(message);
    this.message = message;
  }
}

export class NotImplementedError extends CustomError {
  constructor() {
    super("Not implemented!");
  }
}

export class WrongContextPlacementError extends CustomError {
  constructor(name?: string) {
    super(`"${name || "useContext"}" was used outside of its Provider!`);
  }
}
