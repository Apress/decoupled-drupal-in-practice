// app/routes/pages.js
import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').findAll('node--page');
  }
});
