function jsonFlickrFeed(json) {
  var $timeline = $('#timeline');
  var maxDate = new Date(-1);
  var minDate = new Date();
  json.items.forEach(function(item){
    date = new Date(item.date_taken);
    if (date > maxDate) maxDate = date;
    if (date < minDate) minDate = date;
  });
  var span = maxDate - minDate;

  json.items.forEach(function(item){
    date = new Date(item.date_taken);
    $('<a class="icon"/>').
      append( $('<img/>').attr('src', item.media.m) ).
      attr('href', '#').
      attr('title', 'click to view').
      css('left', 100 * (date - minDate)/span + '%').
      click(function(){ $(this).toggleClass('selected') }).
      appendTo($timeline);
  });
}
