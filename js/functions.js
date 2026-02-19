/**
 * Функция для проверки длины строки.
 * @param {string} string - Строка, которую нужно проверить.
 * @param {number} length - Максимальная допустимая длина строки.
 * @returns {boolean} - Возвращает true, если строка соответствует требованиям по длине, и false, если строка превышает максимальную длину.
 */

const isStringLengthValid = (string, length) => string.length <= length;

/**
 * Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
 * @param {string} string - Входная строка
 * @returns {boolean} - Возвращает true, если строка является палиндромом, и false, если не является
*/

const isStringPalindrome = (string) => {
  const stringSymbols = string.toString().toLowerCase().match(/[а-я]/g) ?? [];

  if (stringSymbols.length === 0) {
    return 'В строке нет букв';
  }

  return stringSymbols.join('') === stringSymbols.reverse().join('');
};

/**
 * Функция для извлечения цифр, содержащихся в строке и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть `NaN`
 * @param {string} string - Входная строка
 * @returns {number} - Целое положительное число из цифр 0...9, имеющихся во входной строке или `NaN` если строка цифр не содержит
 */
const getNumbers = (string) => {
  const stringNumbers = string.toString().match(/\d/g) ?? [];

  if (stringNumbers.length === 0) {
    return 'В строке нет цифр';
  }

  return parseInt(stringNumbers.join(''), 10);
};

export {isStringLengthValid, getNumbers, isStringPalindrome};
