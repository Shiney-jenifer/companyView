(function(){  var app = angular.module('store', ['store-product']);
              app.controller('StoreController',['$http',function($http)
               {
          	      var store=this;
          	      store.product = [];
          	      $http.get('application/product.js').success(function(data){
          	      console.log(data);
          	      store.product=data;
                  });
                }
  		        ]);
	          })();
