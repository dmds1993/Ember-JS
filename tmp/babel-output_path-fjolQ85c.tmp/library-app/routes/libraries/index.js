define('library-app/routes/libraries/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('library');
    },
    actions: {
      deleteLibrary: function deleteLibrary(library) {
        var confirmation = confirm('Are you sure?');
        if (confirmation) {
          library.destroyRecord();
        }
      }
    }
  });
});