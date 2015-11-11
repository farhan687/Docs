(function ( $ ) {
    $.fn.searchAppbase = function() {
    	var $search = this;
		$.get('https://raw.githubusercontent.com/appbaseio/Docs/gh-pages/search-index.json').done(function(data){
			onSuccessData(data);
		});
    	
		function onSuccessData(searchData){
			searchData = JSON.parse(searchData);
			var posts = new Bloodhound({
			    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title', 'content'),
			    queryTokenizer: Bloodhound.tokenizers.whitespace,
			    local: searchData
			});

			$search.typeahead({
			    highlight: true
			}, {
			    name: 'titles',
			    displayKey: 'title',
			    source:posts
			});
	    }		    
}
}( jQuery ));