var trackOutboundLink = function(url) {
    ga('send', 'event', 'Outbound', 'Click', url, {
      'transport': 'beacon',
      'hitCallback': function(){document.location = url;}
    });
 }

 try {
    // Runs code that may or may not work.
    window.possiblyUndefinedFunction();
  } catch(err) {
    ga('send', 'exception', {
      'exDescription': err.message,
      'exFatal': false
    });
  }