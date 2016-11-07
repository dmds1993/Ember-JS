define('library-app/models/author', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    books: _emberData['default'].hasMany('book')
  });
});