// List of icons to randomly choose between
var iconIndex = 0;
var iconsList = ["icon://fa-heart", 
                 "icon://fa-music", 
                 "icon://fa-smile-o", 
                 "icon://fa-globe", 
                 "icon://fa-tree", 
                 "icon://fa-bolt", 
                 "icon://fa-moon-o",
                 "icon://fa-star"];
changeShapes();
changeColors();
changeLocations();
onEvent("shapesButton", "click", function( ) {
  changeShapes();
});
onEvent("locationsButton", "click", function( ) {
  changeLocations();
});
function changeLocations() {
  for (var i = 0; i < 20; i++) {
    setProperty("icon" + i, "x", randomNumber(0, 270));
    setProperty("icon" + i, "y", randomNumber(0, 400));
    setProperty("icon" + i, "width", randomNumber(30, 300));
    setProperty("icon" + i, "height", randomNumber(30, 300));
  }
}
onEvent("colorsButton", "click", function( ) {
  changeColors();
});
function changeColors() {
  var red = randomNumber(0, 255);
  var green = randomNumber(0, 255);
  var blue = randomNumber(0, 255);
  for (var i = 0; i < 20; i++) {
    setProperty("icon" + i, "icon-color", rgb(red, green, blue, 0.5));
  }
  setProperty("homeScreen", "background-color", rgb(green, blue, red, 0.5));
}
function changeShapes() {
  var lastIndex = iconIndex;
  iconIndex = randomNumber(0, iconsList.length - 1);
  while (iconIndex == lastIndex) {
    iconIndex = randomNumber(0, iconsList.length - 1);
  }
  // Loop through icons to assign images
  for (var i = 0; i < 20; i++) {
    setProperty("icon" + i , "image", iconsList [iconIndex]);
  }
}
