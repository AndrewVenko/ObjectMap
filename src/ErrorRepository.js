export default class ErrorRepository {
  constructor() {
    this.errorMap = new Map();
  }

  addError(code, description) {
    this.errorMap.set(code, description);
  }

  translate(code) {
    const errorDescription = this.errorMap.get(code);
    return errorDescription || 'Unknown error';
  }
}
