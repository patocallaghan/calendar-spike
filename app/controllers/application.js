import Controller from '@ember/controller';

export default Controller.extend({
  month1: new Date(2018, 9, 16),
  selected1: new Date(2018, 9, 17),
  month2: new Date(2018, 9, 16),
  selected2: new Date(2018, 9, 17),
  month3: new Date(2018, 9, 16),
  selected3: new Date(2018, 9, 17),
  minDate: new Date(2018, 9, 10),
  maxDate: new Date(2018, 9, 25),
  disabledDates: [new Date(2018, 9, 15), new Date(2018, 9, 10), new Date(2018, 10, 1), new Date(2018, 9, 27)],
  actions: {
    onSelect(date) {
      console.log(date);
    }
  }
})