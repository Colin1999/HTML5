/**
对于localStorage的模拟
新建模拟存储容器 ls
*/

//window.localStorage = window.localStorage||(function(){
window.ls = window.ls||(function(){
	var storage = {};
	return {
		setItem: function(key,value){
			storage[key] = value;
		},
		getItem: function(key) {
			return storage[key];
		},
		removeItem: function(key){
			delete storage[key];
		},
		clear: function() {
			storage = {};
		},
		emulated: true
	};
})();
