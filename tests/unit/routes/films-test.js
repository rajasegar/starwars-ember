import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | films', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:films');
    assert.ok(route);
  });
});
