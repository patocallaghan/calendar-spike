import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    if (!this.center) {
      if (!this.selected) {
        this.set('center', new Date());
        return;
      }
      this.set('center', this.selected);
    }
  }
});
