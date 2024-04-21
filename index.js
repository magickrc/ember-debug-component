'use strict';

const Funnel = require('broccoli-funnel');

module.exports = {
  name: require('./package').name,

  _getOptions() {
    return (this.parent && this.parent.options) || (this.app && this.app.options) || {};
  },

  setupPreprocessorRegistry(type, registry) {
    let app = this._findHost();
    let addonOptions = this._getOptions()[this.name];

    if (!addonOptions?.allow?.includes(app.env)) {
      const plugin = this._buildPlugin();
      plugin.parallelBabel = {
        requireFile: __filename,
        buildUsing: '_buildPlugin',
        params: {},
      };
      registry.add('htmlbars-ast-plugin', plugin);
    }
  },

  _buildPlugin() {
    const emberTemplateDebugTransform = require('./lib/ast-transform');

    return {
      name: 'ember-debug-component',
      plugin: emberTemplateDebugTransform,
      baseDir: emberTemplateDebugTransform.baseDir,
      cacheKey: emberTemplateDebugTransform.cacheKey,
    };
  },

  _filterAssertHelper(tree) {
    let app = this._findHost();
    let addonOptions = this._getOptions()[this.name];

    if (addonOptions?.allow?.includes(app.env)) {
      return tree;
    }

    return new Funnel(tree, {
      exclude: [
        'components/debug.js',
        'components/debug.hbs',
        'services/debug-dev-tools.js',
      ],
    });
  },

  treeForApp(tree) {
    return this._super.treeForApp.call(
      this,
      this._filterAssertHelper(tree, 'app tree')
    );
  },

  treeForAddon(tree) {
    return this._super.treeForAddon.call(
      this,
      this._filterAssertHelper(tree, 'addon tree')
    );
  },
};
