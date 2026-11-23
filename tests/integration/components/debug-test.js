import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | debug', function (hooks) {
  setupRenderingTest(hooks);

  test('it shows and hides debug content', async function (assert) {
    const debugDevTools = this.owner.lookup('service:debug-dev-tools');

    debugDevTools.hide();

    await render(hbs`
      <Debug>
        <div data-test-debug-content>
          Debug content
        </div>
      </Debug>
    `);

    assert.dom('[data-test-debug-content]').doesNotExist();

    debugDevTools.show();
    await settled();

    assert.dom('[data-test-debug-content]').exists();

    debugDevTools.hide();
    await settled();

    assert.dom('[data-test-debug-content]').doesNotExist();
  });
});