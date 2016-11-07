define('library-app/models/book', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    releaseYear: _emberData['default'].attr('date'),
    library: _emberData['default'].belongsTo('library'),
    author: _emberData['default'].belongsTo('author')
  });
});