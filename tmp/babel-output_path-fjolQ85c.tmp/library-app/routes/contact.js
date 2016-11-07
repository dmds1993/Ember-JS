define('library-app/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    emailAddress: '',

    messageText: '',

    messageTextIsValid: _ember['default'].computed('messageText', function () {
      if (this.get('messageText')) {
        return this.get('messageText').length > 4;
      }
      return false;
    }),

    isValid: _ember['default'].computed.match('emailAddress', /^.+@.+\..+$/),

    isDisabled: _ember['default'].computed.not('isValid') && _ember['default'].computed.not('messageTextIsValid'),

    actions: {
      saveText: function saveText() {
        var _this = this;

        var message = this.get('messageText');
        var email = this.get('emailAddress');
        var newInvitation = this.store.createRecord('contacts', { message: message, email: email });
        newInvitation.save().then(function (response) {
          _this.set('responseMessage', 'Temos a sua mensagem ' + _this.get('messageText') + ' e entraremos em contato em breve');
          _this.set('emailAddress');
          _this.set('messageText');
        });
      }
    }
  });
});