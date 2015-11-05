/*var self = require('sdk/self');
var data = require("sdk/self").data;

var Icono_Blog_panel = require("skd/panel").Panel({
  width: 200,
  height: 155,
  contentURL: data.url("menu.html")
});

Icono_Blog_panel.port.on("click", function(url) {
  require("tabs").open(url);
  //require("windows").browserWindows.activewindow.open(url);
});


require("sdk/widget").Widget({
    id: "Icono_Blog",
    label: "Blog Cosillas de Juansal",
    contentURL: data.url("icon.png"),
    tooltip: "Blog Cosillas de Juansal",
    panel: Icono_Blog_panel
    });
*/

var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
  id: "my-button",
  label: "Blog Cosillas de Juansal",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
	"48": "./icon-48.png",
    "64": "./icon-64.png",
	"96": "./icon-96.png",
	"128": "./icon-128.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
	  width: 200,
  height: 125,
  contentURL: self.data.url("menu.html"),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}
