app.directive('navMap', ['languageService', function(language) {
  var link = function (scope, element, attrs, ctrl) {
    // create a list of buttons for ngRepeat
    var Btn = function (btnClass, position, name, page) {
      this.btnClass = btnClass;
      this.position = position;
      this.name = name;
      this.page = page;
      this.labelClass = 'label label-warning label-position';
    };
    var buttons = [
      new Btn('btn-blue', 'b1', 'Team', '/team'),
      new Btn('btn-blue', 'b2', 'Journal', '/journal'),
      new Btn('btn-blue', 'b3', 'Gallery', '/gallery'),
      new Btn('btn-blue', 'b4', 'Tutorial', '/tutorial'),
      new Btn('btn-blue', 'b5', 'School', '/school'),
      new Btn('btn-blue', 'b6', 'Game', '/game'),
      new Btn('btn-blue', 'b7', 'Help', '/info')
    ];
    buttons.forEach(function (file) {
      if (file.name === ctrl.page)
        file.btnClass = 'btn-red';
    });
    console.log(ctrl.page);
    scope.buttons = buttons;
  };

  return {
    require: '^navMushroom',
    restrict: 'E',
    scope: {
      page: '@'
    },
    link: link,
    templateUrl: 'app/shared/navigation/nav-map/nav-map.html'
  };
}]);
