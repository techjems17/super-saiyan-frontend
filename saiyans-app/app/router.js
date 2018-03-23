import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('profiles');
  this.route('contact');
  this.route('change', { path: '/change/:profile_id' });
  this.route('skills');
});

export default Router;
