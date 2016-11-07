QUnit.module('JSHint | controllers/contact.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/contact.js should pass jshint.\ncontrollers/contact.js: line 26, col 120, Missing semicolon.\ncontrollers/contact.js: line 25, col 14, \'response\' is defined but never used.\ncontrollers/contact.js: line 29, col 9, Missing semicolon.\n\n3 errors');
});
