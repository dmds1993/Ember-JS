define('library-app/routes/libraries/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.createRecord('library');
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      controller.set('title', 'Create a new library');
      controller.set('buttonLabel', 'Create');
    },

    renderTemplate: function renderTemplate() {
      this.render('libraries/form');
    },

    actions: {
      saveLibary: function saveLibary(newLibrary) {
        var _this = this;

        newLibrary.save().then(function (response) {
          return _this.transitionTo('libraries');
        });
      },
      willTransition: function willTransition() {
        var model = this.controller.get('model');

        if (model.get('isNew')) {
          model.destroyRecord();
        }
      }
    }
  });
});