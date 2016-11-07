define('library-app/models/contacts', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    message: _emberData['default'].attr('string'),
    email: _emberData['default'].attr('string')
  });
});