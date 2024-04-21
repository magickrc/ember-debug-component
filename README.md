# ember-debug-component

[Short description of the addon.]


## Compatibility

* Ember.js v4.4 or above
* Ember CLI v4.4 or above
* Node.js v14 or above


## Installation

```
ember install ember-debug-component
```

## Configuration
You can specify `ember-cli-build.js`:

```js
module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-debug-component': {
      allow: ['development'], // for other ENVs <Debug>lalala</Debug> will be excluded from build
    }
  });
```


## Usage

```hbs
<div>
  <Debug> hidden content </Debug>
</div>
```

Use commands in the browser console to see hidden information.

- `debugDevTools.show()`
- `debugDevTools.hide()`


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
