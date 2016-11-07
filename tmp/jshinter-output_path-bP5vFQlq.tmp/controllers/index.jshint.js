QUnit.module('JSHint | controllers/index.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/index.js should pass jshint.\ncontrollers/index.js: line 18, col 33, Missing semicolon.\n\n1 error');
});
