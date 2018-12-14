// app/models/node--article.js
import DS from 'ember-data';

export default DS.Model.extend({
  uuid: DS.attr(),
  title: DS.attr(),
  created: DS.attr(),
  body: DS.attr()
});
