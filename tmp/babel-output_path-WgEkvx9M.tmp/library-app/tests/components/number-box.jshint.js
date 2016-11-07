define('library-app/tests/components/number-box.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/number-box.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/number-box.js should pass jshint.');
  });
});