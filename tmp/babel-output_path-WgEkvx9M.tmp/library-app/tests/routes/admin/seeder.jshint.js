define('library-app/tests/routes/admin/seeder.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/admin/seeder.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/seeder.js should pass jshint.\nroutes/admin/seeder.js: line 10, col 7, Missing semicolon.\n\n1 error');
  });
});