import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | vehicles/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:vehicles/show');
    assert.ok(route);
  });
});
