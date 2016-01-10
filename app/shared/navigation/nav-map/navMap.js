app.directive('navMap', function() {
  var link = function (scope, element, attrs) {
    // create a list of buttons for ngRepeat
    var Btn = function (btnClass, position, name, route) {
      this.btnClass = btnClass;
      this.position = position;
      this.name = name;
      this.labelClass = 'label label-warning label-position';
    };
    var buttons = [
      new Btn('btn-blue', 'b1', 'Team'),
      new Btn('btn-blue', 'b2', 'Home'),
      new Btn('btn-blue', 'b3', 'Gallery'),
      new Btn('btn-blue', 'b4', 'Tutorial'),
      new Btn('btn-blue', 'b5', 'School'),
      new Btn('btn-blue', 'b6', 'Team'),
      new Btn('btn-blue', 'b7', 'Help')
    ];
    scope.buttons = buttons;
  };

  return {
    restrict: 'E',
    link: link,
    templateUrl: 'app/shared/navigation/nav-map/nav-map.html'
  };
});
