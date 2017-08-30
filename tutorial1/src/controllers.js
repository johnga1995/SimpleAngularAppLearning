var app = angular.module('MyApp',[
	'ngRoute'

	]);


app.config(function($routeProvider,$locationProvider, $httpProvider){


	$httpProvider.defaults.withCredentials = true;
    //$httpProvider.interceptors.push('XSRFInterceptor');

	$routeProvider
	.when('/',{
		templateUrl:'home.html'
	})
	.when('/about',{
		templateUrl: 'about.html'
	})
	.otherwise({
		redirectTo:'/'
	});

});

app.controller('myCntrl', ['$scope', function($scope){
	$scope.food = 'none'

	$scope.rice = function(){
		$scope.food = 'rice'
	};

	$scope.noodles = function(){
		$scope.food = 'noodles'
	};

	$scope.chicken = function(){
		$scope.food = 'food'
	};

}]);


app.controller('myCntrl2', ['$scope', function($scope){
	$scope.pets = [
		{
			type: 'dog',
			breed: 'viszla'
		},
		{
			type: 'cat',
			breed: 'chispa'
		},
		{
			type: 'horse',
			breed: 'pony'
		},
		{
			type: 'tiger',
			breed: 'liger'
		}

	];
}]);


app.controller('httpTesting', function($scope, $http){
	$scope.data2 = [];
	//$http.defaults.headers.post["Content-Type"] = "application/json";

	$scope.sendPost = function(){
		

		var config = 
		{
			withCredentials: true,
			headers:{
						'Authorization': 'Basic',
                		'Accept': 'application/json',
                		'Content-Type': 'application/json' 
            		},
            transformRequest: angular.identity
        };

		var dataObj = { 
				msg : $scope.data,
				state : $scope.state,
				isFirst : false
		};	

		var data2send =  JSON.stringify(dataObj);


		$http.post('/api/test' ,data2send,config)
		.then(function(response){
			// expects a JSON response 
			$scope.data2 = response.data

		}, function(response){

			console.log('Error Occured' + response)

		});
	};


	$scope.sendGet = function(){
		

		var config = 
		{
			withCredentials: true,
			headers:{
						'Authorization': 'Basic',
                		'Accept': 'application/json',
                		'Content-Type': 'application/json' 
            		},
            transformRequest: angular.identity
        };

		var dataObj = { 
				msg : $scope.data,
				state : "$scope.state",
				isFirst : false
		};	

		var data2send =  JSON.stringify(dataObj);


		$http.get('/api/test')
		.then(function(response){
			// expects a JSON response 
			$scope.data2 = response.data

		}, function(response){
			
			console.log('Error Occured' + response)

		});
	};


	
});