define('library-app/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    emailAddress: '',

    isValid: _ember['default'].computed.match('emailAddress', /^.+@.+\..+$/),

    isDisabled: _ember['default'].computed.not('isValid'),

    actions: {
      saveInovation: function saveInovation() {
        var _this = this;

        var email = this.get('emailAddress');
        var newInvitation = this.store.createRecord('invitation', { email: email });
        newInvitation.save().then(function (response) {
          _this.set('responseMessage', 'thank you! We\'ve just saved your email address: ' + _this.get('emailAddress') + ' seu id: ' + response.get('id'));
          _this.set('emailAddress');
        });
      }
    }

    // actualEmailAddress: Ember.computed('emailAddress', function() {
    //   console.log('actualEmailAddress function is called:', this.get('emailAddress'));
    // }),
    //
    // emailAddressChanged: Ember.observer('emailAddress', function() {
    //   console.log('observer is called', this.get('emailAddress'));
    // })
  });

  // let Person = Ember.Object.extend ({
  //   firstName: null,
  //   lastName: null,
  //   age: null,
  //   country: null,
  //
  //   fullName: Ember.computed('firstName', 'lastName', {
  //     get (key) {
  //       return `${this.get('firstName')} ${this.get('lastName')}`;
  //     },
  //     set (key, value) {
  //       console.log(value, key)
  //       let [firstName, lastName] = value.split(/\s+/);
  //       this.set('firstName', firstName);
  //       this.set('lastName', lastName);
  //       return value
  //     }
  //   }),
  //
  //   description: Ember.computed('fullName', 'age', 'country', function() {
  //     return `${this.get('fullName')}; Age: ${this.get('age')}; Country: ${this.get('country')}`
  //   })
  //
  // })
  //
  // let ironMan = Person.create();
  //
  // // console.log(`${ironMan.get('fullName')}`);
  //
  // // console.log(`${ironMan.get('description')}`);
  //
  // console.log(`Set nas propriedades`, ironMan.set('fullName', 'Daniel Melo'));
  // console.log(`Get pós alteraçao`, ironMan.get('firstName'));
  // console.log(`Get pós alteraçao`, ironMan.get('lastName'));
});