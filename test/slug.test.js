'use strict';

const assert = require('node:assert/strict');
const { test } = require('node:test');
const { slugify } = require('../bin/sk-slug');

test('lowercases and hyphenates plain Latin text', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('folds Latin diacritics', () => {
  assert.equal(slugify('Café Über Señor'), 'cafe-uber-senor');
});

test('keeps й and ё distinct from и and е', () => {
  // NFKD decomposes both, so transliteration has to run first.
  assert.equal(slugify('дверей'), 'dverey');
  assert.equal(slugify('ёлка'), 'yolka');
});

test('transliterates Uzbek Cyrillic letters', () => {
  assert.equal(slugify('Тошкент шаҳри'), 'toshkent-shahri');
  assert.equal(slugify('ўқувчи'), 'oquvchi');
});

test('collapses punctuation runs into one hyphen', () => {
  assert.equal(slugify('Доставка дверей — Москва'), 'dostavka-dverey-moskva');
});

test('trims leading and trailing hyphens', () => {
  assert.equal(slugify('  ...hello...  '), 'hello');
});

test('drops characters with no mapping instead of emitting a placeholder', () => {
  assert.equal(slugify('price 100 ₽'), 'price-100');
});

test('returns an empty string when nothing survives', () => {
  assert.equal(slugify('日本語'), '');
});
