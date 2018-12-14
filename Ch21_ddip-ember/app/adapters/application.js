// app/adapters/application.js
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://jsonapi-test.dd:8083',
  namespace: 'jsonapi',

  pathForType(type) {
    let entityPath;
    switch(type) {
      case 'node--article':
        entityPath = 'node/article';
        break;
      case 'node--page':
        entityPath = 'node/page';
        break;
    }
    return entityPath;
  },

  buildURL() {
    return this._super(...arguments);
  }
});
