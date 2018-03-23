import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import $ from 'jquery';

export default Route.extend({
    model() {
        return hash({
            profiles: this.store.findAll('profile'),
            teachers: $.getJSON('teacher.json')
        });
    }
});
