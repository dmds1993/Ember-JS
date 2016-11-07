define('library-app/tests/models/library.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/library.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/library.js should pass jshint.\nmodels/library.js: line 9, col 12, \'Ember\' is not defined.\n\n1 error');
  });
});