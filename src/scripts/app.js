angular.module("MODULE", ["ansible"])

	.config(function (AnsibleProvider) {

		AnsibleProvider.init(io("http://localhost:29000"));

	})

	.controller("TestController", function ($scope, Ansible) {

		var something = new Ansible("/test/123");
		$scope.something = something.data;

	});