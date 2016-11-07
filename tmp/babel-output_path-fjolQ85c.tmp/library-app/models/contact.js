define('library-app/models/contact', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    message: _emberData['default'].attr('string'),
    email: _emberData['default'].attr('string')
  });
});