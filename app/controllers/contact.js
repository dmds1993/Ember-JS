import Ember from 'ember';

export default Ember.Route.extend({
  emailAddress: '',

  messageText: '',

  messageTextIsValid: Ember.computed('messageText', function() {
    if (this.get('messageText')) {
      return this.get('messageText').length > 4;
    }
    return false;
  }),

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isDisabled: Ember.computed.not('isValid') && Ember.computed.not('messageTextIsValid'),

  actions: {
    saveText() {
      const message = this.get('messageText');
      const email = this.get('emailAddress');
      const newInvitation = this.store.createRecord('contacts', {message: message, email: email});
      newInvitation.save()
      .then((response) => {
        this.set('responseMessage', `Temos a sua mensagem ${this.get('messageText')} e entraremos em contato em breve`)
        this.set('emailAddress');
        this.set('messageText');
      })
    }
  }
});
