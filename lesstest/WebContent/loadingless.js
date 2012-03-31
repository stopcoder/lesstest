(function(window, document){
	console.log(less.tree);
	
	$(document).ready(function(){
		
		var parser = new less.Parser();
		
		$.get("less/test.less", function(data){
			console.log(data);
			parser.parse(data, function(error, tree){
				console.log(tree);
				var cssCode = tree.toCSS({},{ greyColor: new less.tree.Color('#ffffff') });
				console.log(cssCode);
			});
		});
	});
	
	
}(window, document));