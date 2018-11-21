var trackOutboundLink = function(url) {
    ga('send', 'event', 'Outbound', 'Click', url, {
      'transport': 'beacon',
      'hitCallback': function(){document.location = url;}
    });
 }