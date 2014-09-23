angular.module("MODULE", ["ansible"])

	.config(function (AnsibleProvider) {

		AnsibleProvider.init(io("http://localhost:29000"));

	})

	.controller("TestController", function ($scope, Ansible) {

		var Person = new Ansible("/test/:id", {
			id: 123
		});

		$scope.person = Person.get({}, function () {
			$scope.person.blah = "bleh";
			$scope.person.$save();
		});

	});
