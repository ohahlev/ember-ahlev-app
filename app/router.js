import EmberRouter from '@ember/routing/router';
import config from 'ember-ahlev-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.mount('ember-engine-ahlev-job', { path: 'engines'});
});
