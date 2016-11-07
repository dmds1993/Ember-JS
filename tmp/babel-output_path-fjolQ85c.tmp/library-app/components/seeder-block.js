define('library-app/components/seeder-block', ['exports', 'ember'], function (exports, _ember) {

  var MAX_VALUE = 100;

  exports['default'] = _ember['default'].Component.extend({

    counter: null,

    isCounterValid: _ember['default'].computed.lte('counter', MAX_VALUE),
    placeholder: 'Max ' + MAX_VALUE,

    createReady: false,
    deleteReady: false,

    actions: {

      generateAction: function generateAction() {
        if (this.get('isCounterValid')) {

          // Action up to Seeder Controller with the requested amount
          this.sendAction('generateAction', this.get('counter'));
        }
      },

      deleteAction: function deleteAction() {
        this.sendAction('deleteAction');
      }

    }
  });
});