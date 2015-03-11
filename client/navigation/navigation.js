Template.home.events ({
  'click .something': function (evt, tmpl) {
    var name = tmpl.find ('.name').value;
  }
});
Template.home.firstvar = function () {
  return Positions.find();
}

