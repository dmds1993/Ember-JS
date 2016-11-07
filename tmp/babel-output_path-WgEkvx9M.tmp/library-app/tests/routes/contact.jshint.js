define('library-app/tests/routes/contact.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/contact.js should pass jshint.\nroutes/contact.js: line 26, col 120, Missing semicolon.\nroutes/contact.js: line 25, col 14, \'response\' is defined but never used.\nroutes/contact.js: line 29, col 9, Missing semicolon.\n\n3 errors');
  });
});