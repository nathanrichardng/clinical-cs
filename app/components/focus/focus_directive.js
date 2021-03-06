angular
	.module('CS')
	.directive('focusOn', focusOn);

function focusOn() {
   return function(scope, elem, attr) {
      scope.$on('focusOn', function(e, name) {
        if(name === attr.focusOn) {
          elem[0].focus();
        }
        else {
        	elem[0].blur();
        }
      });
   };
};