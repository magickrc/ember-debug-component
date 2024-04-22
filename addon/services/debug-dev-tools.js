import Service from '@ember/service';
import { tracked } from "@glimmer/tracking";

export default class DebugDevToolsService extends Service {
  @tracked debugValue = localStorage.getItem('show-debug-component') === 'true' || false;

  constructor() {
    super(...arguments);
    window.debugDevTools = this;
  }

  setDebugValue(value) {
    this.debugValue = value;
    localStorage.setItem('show-debug-component', value ? 'true' : '');
  }

  get debugEnabled() {
    return this.debugValue;
  }

  show() {
    this.setDebugValue(true);
    return 'Debug component is enabled';
  }

  hide() {
    this.setDebugValue(false);
    return 'Debug component is disabled';
  }
}
