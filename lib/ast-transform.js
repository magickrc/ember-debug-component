"use strict";

module.exports = function emberTemplateDebugTransform(env) {
  let visitor = {
    ElementNode(node) {
      if (node.tag === "Debug") {
        return null;
      }
    },
  };

  return {
    name: "ember-debug-component",
    visitor,
  };
};

module.exports.baseDir = function () {
  return __dirname;
};

module.exports.cacheKey = function () {
  return "ember-debug-component";
};
