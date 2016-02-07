app.directive('navMap', ['languageService', function(language) {
  var link = function (scope, element, attrs) {
    // create a list of buttons for ngRepeat
    var Btn = function (btnClass, position, name, page) {
      this.btnClass = btnClass;
      this.position = position;
      this.name = name;
      this.page = page;
      this.labelClass = 'label label-warning label-position';
    };
    var navs = language.trans.nav[language.lang.toString()];
    var buttons = [
      new Btn('btn-blue', 'b1', navs.TEAM, '/team'),
      new Btn('btn-blue', 'b2', navs.JOURNAL, '/journal'),
      new Btn('btn-blue', 'b3', navs.GALLERY, '/gallery'),
      new Btn('btn-blue', 'b4', navs.TUTORIALS, '/tutorials'),
      new Btn('btn-blue', 'b5', navs.SCHOOL, '/school'),
      new Btn('btn-blue', 'b6', navs.GAME, '/game'),
      new Btn('btn-blue', 'b7', navs.HELP, '/info')
    ];
    var isInfo = true;
    buttons.forEach(function (file) {
      if (file.page === scope.page) {
        isInfo = false;
        file.btnClass = 'btn-red';
      }
    });
    if (isInfo)
      buttons[buttons.length-1].btnClass = 'btn-red';
    scope.buttons = buttons;
  };

  return {
    restrict: 'E',
    link: link,
    templateUrl: 'app/shared/navigation/nav-map/nav-map.html'
  };
}]);
