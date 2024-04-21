import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class DebugComponent extends Component {
  @service debugDevTools;

  get isDebugEnabled() {
    return this.debugDevTools.debugEnabled;
  }
}
