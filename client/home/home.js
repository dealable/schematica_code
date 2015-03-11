Template.home.events ({
  'dblclick .schema': function (evt, tmpl) {
    evt.preventDefault();
    evt.stopPropagation()
    if(evt.target.className == 'container-fluid schema'){
      var id = Positions.insert(
	{name: 'New Table', 
	 left: (evt.pageX) + 'px',
	 top: (evt.pageY) + 'px'
	});
      Session.set('editing_table',id);
    }
    var name = tmpl.find ('.name').value;
  }
});

Template.home.positions = function () {
  return Positions.find();
}
