var module;
try {
  module = angular.module('bonitasoft.ui.fragments');
} catch (e) {
  module = angular.module('bonitasoft.ui.fragments', []);
  angular.module('bonitasoft.ui').requires.push('bonitasoft.ui.fragments');
}
module.directive('pbFragmentFragTestUIB', function() {
  return {
    template: '<div>    <div class="row">\n        <div pb-property-values=\'bcfed7ec-bc03-47da-ba2f-28debec8590a\'>\n    <div ng-if="!properties.hidden" class="component col-xs-12  col-sm-12  col-md-12  col-lg-12" ng-class="properties.cssClasses">\n        <pb-text></pb-text>\n    </div>\n</div>\n    </div>\n    <div class="row">\n        <div pb-property-values=\'b95eed08-4095-44ce-9aca-110e7a9ec608\'>\n    <div ng-if="!properties.hidden" class="component col-xs-12  col-sm-12  col-md-12  col-lg-12" ng-class="properties.cssClasses">\n        <custom-living-application-menu></custom-living-application-menu>\n    </div>\n</div>\n    </div>\n</div>'
  };
});
