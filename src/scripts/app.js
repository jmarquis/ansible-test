angular.module("MODULE", ["ansible"])

	.config(function (AnsibleProvider) {

		AnsibleProvider.init(io("http://localhost:29000"));

	})

	.controller("TestController", function ($scope, Ansible) {

		$scope.something = "whatever";

		new Ansible("/test/123");

	});