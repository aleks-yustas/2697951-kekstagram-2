import { expect, test } from 'vitest';
import { isStringLengthValid } from './functions';

test('Строка `проверяемая строка` короче 20 символов', () => {
  expect(isStringLengthValid('проверяемая строка', 20)).toBe(true);
});
test('Строка `проверяемая строка` ровно 18 символов', () => {
  expect(isStringLengthValid('проверяемая строка', 18)).toBe(true);
});
test('Строка `проверяемая строка` длиннее 10 символов', () => {
  expect(isStringLengthValid('проверяемая строка', 10)).toBe(false);
});
