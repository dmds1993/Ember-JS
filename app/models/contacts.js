import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr('string'),
  email: DS.attr('string')
});
