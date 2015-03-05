/*------------------------------------

	Current - Weather Watchapp

------------------------------------*/

var UI = require('ui');


//----- Main Card
	var card = new UI.Card({
		title:'Weather',
		subtitle:'Fetching...'
	});

	card.show();





//----- Settings
Pebble.addEventListener('showConfiguration', function(e) {
	Pebble.openURL('http://apps.mattricks.co/apps/pebble/current/config.html');
});

Pebble.addEventListener('webviewclosed',
  function(e) {
    console.log('Configuration window returned: ' + e.response);
  }
);