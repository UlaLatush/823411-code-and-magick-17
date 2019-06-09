var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;
var WIDTH_TO_HEIGHT_PROPORTION = 1.337;

var getFireballSpeed = function (left) {
  return left ? 5 : 2;
};

var getWizardHeight = function () {
  return WIDTH_TO_HEIGHT_PROPORTION  * wizardWidth;
};

var getWizardX = function (width) {
  return width / 2 - wizardWidth / 2;
};

var getWizardY = function (height) {
  return height / 3;
};

