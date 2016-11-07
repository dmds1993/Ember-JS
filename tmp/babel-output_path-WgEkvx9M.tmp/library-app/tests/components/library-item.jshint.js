define('library-app/tests/components/library-item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/library-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/library-item.js should pass jshint.');
  });
});