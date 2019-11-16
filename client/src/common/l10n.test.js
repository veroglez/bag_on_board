import L10N from './l10n';

const KEYS = [
  'ADD',
  'MINUS',
  'PLUS',
];

describe('L10N', () => {
  it('L10N.es-ES', () => {
    expect(Object.keys(L10N)).toEqual(KEYS);
  });
});
