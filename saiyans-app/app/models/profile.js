import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    dob: DS.attr(),
    description: DS.attr(),
    teacher: DS.attr(),
    image: DS.attr(),
});