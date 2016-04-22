angular.module('wit',['xml'])
	.config(function ($httpProvider) {
    	$httpProvider.interceptors.push('xmlHttpInterceptor');
  	})
	.controller('api',function($scope,$http){
		$http({
			method:'GET',
			url:'http://thecatapi.com/api/images/get?format=xml&results_per_page=20&type=jpg&size=med'
		})
		.then(function successCallback(result){
			$scope.cats = result.data.response.data.images.image;
			console.log($scope.cats)
		},function errorCallback(err){
			console.log(err);
		});
	});