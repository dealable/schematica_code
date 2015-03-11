Template.position.events ({
  'click .glyphicon-tasks': function (evt, tmpl) {
    evt.preventDefault();
    evt.stopPropagation();
    Session.set('editing_tablename',this._id);
  },
  'click .addfield':function(evt,tmpl){
    evt.preventDefault();
    evt.stopPropagation();
    DBfields.insert({name:'New Field',tableid:this._id});
  },
  'click .close':function(evt,tmpl){
    Positions.remove({_id:this._id})
  },
  'keyup .tablename': function(evt,tmpl){
    evt.stopPropagation();
    evt.preventDefault();
    if(evt.which == 13){
      Positions.update(this._id,{$set:{name:tmpl.find('.tablename').value}});
      Session.set('editing_tablename',null);
    }
  }
});
Template.position.rendered = function (x) {
  $('.modal-content').draggable({
    handle:'.modal-header',
    stop:function(evt,ui){
      Positions.update($(this).attr('id'),
	{$set: {left: ui.position.left + 'px', top: ui.position.top + 'px'}}
      );
    }
  })
}
Template.position.editing_tablename = function(){
  return Session.equals('editing_tablename',this._id) // return True if session variable and this._id are equal
}
Template.position.dbfields = function(){
  return DBfields.find({tableid:this._id})
}
