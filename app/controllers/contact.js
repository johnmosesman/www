import Ember from 'ember';

export default Ember.Controller.extend({
  mixpanel: Ember.inject.service(),
  formSubmitted: false,
  actions: {
    submitForm() {
      // const { trackEvent } = this.get('mixpanel');
      const props = {
        email: this.get('email'),
        message: this.get('message')
      };
      console.log("submit form!", props);
      this.get('model').save().then((data) => {
        this.set('formSubmitted', true);
      });
    }
  }
});
