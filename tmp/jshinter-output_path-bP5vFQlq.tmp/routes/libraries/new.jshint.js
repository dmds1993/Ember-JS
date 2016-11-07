QUnit.module('JSHint | routes/libraries/new.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/libraries/new.js should pass jshint.\nroutes/libraries/new.js: line 22, col 14, \'response\' is defined but never used.\n\n1 error');
});
