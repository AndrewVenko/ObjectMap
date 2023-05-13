import ErrorRepository from '../ErrorRepository';

describe('ErrorRepository', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.addError(404, 'Page not found');
  errorRepository.addError(500, 'Internal server error');

  it('Приводит существующий код ошибки', () => {
    const description = errorRepository.translate(404);
    expect(description).toBe('Page not found');
  });

  it('Возвращает строку Unknown error, если такой ошибки нет в хранилище ', () => {
    const description = errorRepository.translate(401);
    expect(description).toBe('Unknown error');
  });

  it('Транслирует ошибку по ее коду', () => {
    const description = errorRepository.translate(500);
    expect(description).toBe('Internal server error');
  });
});
