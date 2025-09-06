import { latinToCyrillic, cyrillicToLatin } from './index';

const testCasesUzbekLatinToUzbekCyrillic = [
    { input: 'Salom', expected: 'Салом' },
    { input: 'O\'zbekiston', expected: 'Ўзбекистон' },
    { input: 'Tashkent', expected: 'Ташкент' },
    { input: 'A\'lochi', expected: 'Аълочи' },
    { input: 'A\ʼlochi', expected: 'Аълочи' },
    { input: 'A\ʽlochi', expected: 'Аълочи' },
    { input: 'O\'quvchi', expected: 'Ўқувчи' },
    { input: 'O\ʼquvchi', expected: 'Ўқувчи' },
    { input: 'O\ʽquvchi', expected: 'Ўқувчи' },
    { input: 'G\'alaba', expected: 'Ғалаба' },
    { input: 'G\ʼalaba', expected: 'Ғалаба' },
    { input: 'G\ʽalaba', expected: 'Ғалаба' },
    { input: 'Shaxsiy', expected: 'Шахсий' },
    { input: 'Salom, men Umarman. Oʻzbekistonda nima gaplar? Gʻayrating joʻshdimi? Aʼlochimisan?', expected: 'Салом, мен Умарман. Ўзбекистонда нима гаплар? Ғайратинг жўшдими? Аълочимисан?' }

]

const testCasesUzbekCyrillicToUzbekLatin = [
    { input: 'Салом', expected: 'Salom' },
    { input: 'Ўзбекистон', expected: 'O\ʻzbekiston' },
    { input: 'Ташкент', expected: 'Tashkent' },
    { input: 'Аълочи', expected: 'Aʼlochi' },
    { input: 'Ўқувчи', expected: 'Oʻquvchi' },
    { input: 'Ғалаба', expected: 'Gʻalaba' },
    { input: 'Шахсий', expected: 'Shaxsiy' },
    { input: 'Салом, мен Умарман. Ўзбекистонда нима гаплар? Ғайратинг жўшдими? Аълочимисан?', expected: "Salom, men Umarman. Oʻzbekistonda nima gaplar? Gʻayrating joʻshdimi? Aʼlochimisan?" }
];

// o' => oʻ
// O' => Oʻ
// g' => gʻ
// G' => Gʻ

// Tutiq belgini bunga => ʼ

for (let testCase of testCasesUzbekLatinToUzbekCyrillic) {
    const actual = latinToCyrillic(testCase.input);
    if (actual !== testCase.expected) {
        console.log(`❌ ${testCase.expected} !== ${actual}`);
    }
}

for (let testCase of testCasesUzbekCyrillicToUzbekLatin) {
    const actual = cyrillicToLatin(testCase.input);
    if (actual !== testCase.expected) {
        console.log(`❌ ${testCase.expected} !== ${actual}`);
    }
}