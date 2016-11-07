define('library-app/tests/routes/admin/contacts.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/admin/contacts.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin/contacts.js should pass jshint.');
  });
});