define('library-app/tests/models/contacts.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/contacts.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/contacts.js should pass jshint.');
  });
});