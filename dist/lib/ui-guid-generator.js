var ui_guid_generator;

ui_guid_generator = new function() {
  var S4;
  S4 = function() {
    return Math.floor(Math.random() * 0x10000).toString(16);
  };
  return function() {
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
  };
};
