(function(){ var app = angular.module('store-product',[ ]);
             app.directive('productPanel',function()
               {
	             return{ 
		         restrict : 'E',
		         templateUrl:'partials/product-panel.html',
		         controller:function(){
			     this.tab = 1;
		         this.selectTab=function(setTab)
		           {
			         this.tab=setTab;
		           }
	             this.isSelected=function(checkTab)
	               {
	    	         return this.tab === checkTab;
	               }
	            },
	            controllerAs : 'panel'
              };
            });
	      app.controller("ReviewController",function()
	       {
		     this.review = {};
		     this.addReview = function(product){
			 product.reviews.push(this.review);
			 this.review = {};
		     };
	      });
       })();