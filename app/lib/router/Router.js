/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/store', {
  name: 'Store'
});

Router.route('/pueo', {
  name: 'Pueo'
});

Router.route('/add', {
  name: 'AddStuff'
});


Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return Stuff.findOne(this.params._id); }
});
