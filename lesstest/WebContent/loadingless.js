(function(window, document){
	//console.log(less.tree);
	
	
	var scrollerControl = function(id){
		var node = $(id);
		var unit = node.width() / 16;
		
		node.bind("mousedown",function(){
			
		});
	}
	
	$(document).ready(function(){
		
		var parser = new less.Parser();
		
		function cssToDocument(cssText, id){
			if(id){
				$("#"+id).html(cssText);
			}else{
				id = 'less_calc';
				$("head").append($("<style id="+id+"></style>").html(cssText));
			}
			return id;
		}
		
		$.get("less/test.less", function(data){
			//console.log(data);
			parser.parse(data, function(error, tree){
				//console.log(tree);
				var cssCode = tree.toCSS({},{ greyColor: new less.tree.Color('FF0000') });
				//console.log(cssCode);
				cssToDocument(cssCode);
			});
		});
	});
	
	
}(window, document));