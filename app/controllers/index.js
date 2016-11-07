import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInovation() {
      const email = this.get('emailAddress');
      const newInvitation = this.store.createRecord('invitation', {email: email});
      newInvitation.save()
      .then((response) => {
        this.set('responseMessage', `thank you! We've just saved your email address: ${this.get('emailAddress')} seu id: ${response.get('id')}`);
        this.set('emailAddress')
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
