"use strict";angular.module("crmf",["ui.router"]),angular.module("crmf").config(["$stateProvider","$urlRouterProvider",function(e,r){e.state("entry",{url:"/entry",templateUrl:"view/entry.html",controller:"entryCtrl"}),r.otherwise("entry")}]),angular.module("crmf").controller("entryCtrl",["$q","$http","$scope",function(e,r,t){t.msg=function(e){alert(e.popmsg)};var n=e.defer();return r.get("/data/employee.json").success(function(e){t.expanders=e,n.resolve(e),console.log(t.expanders)}).error(function(e){n.reject(e)}),n.promise}]),angular.module("crmf").directive("crmfEmployeeList",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/employee-list.html"}}]),angular.module("crmf").directive("accordion",function(){return{restrict:"A",replace:!0,transclude:!0,template:"<div ng-transclude></div>",controller:function(){var e=[];this.gotOpened=function(r){angular.forEach(e,function(e){r!=e&&(e.showMe=!1)})},this.addExpander=function(r){e.push(r)}}}}),angular.module("crmf").directive("expander",function(){return{restrict:"A",replace:!0,transclude:!0,require:"^?accordion",scope:{expanderTitle:"="},template:'<div><div class="ex-title" ng-click="toggle()">{{expanderTitle}}</div><div class="ex-body" ng-show="showMe" ng-transclude></div></div>',link:function(e,r,t,n){e.showMe=!1,n.addExpander(e),e.toggle=function(){e.showMe=!e.showMe,n.gotOpened(e)}}}}),angular.module("crmf").directive("crmfFoot",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/foot.html"}}]),angular.module("crmf").directive("crmfHead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/head.html"}}]);