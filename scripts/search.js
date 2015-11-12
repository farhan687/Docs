(function ( $ ) {
    $.fn.searchAppbase = function() {
    	var $search = this;
		$search.addClass('appbase-search');
		$.get('https://raw.githubusercontent.com/appbaseio/Docs/gh-pages/search-index.json').done(function(data){
			onSuccessData(data);
		});
    	
		function onSuccessData(searchData){
			searchData = JSON.parse(searchData);
			for(var i=0; i< searchData.length; i++){
				searchSingle = searchData[i];
				searchSingle.content = searchSingle.content.replace(/<\/?[^>]+(>|$)/g, " ");
			};
			var posts = new Bloodhound({
			    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title', 'content'),
			    queryTokenizer: Bloodhound.tokenizers.whitespace,
			    local: searchData
			});

			$search.typeahead({
			    minLength: 1
			}, {
			    name: 'titles',
			    displayKey: 'title',
			    source:posts,
			    templates: {
					pending: true,
					suggestion: function(data) {
						if (data) {
							var single_record = search_tag(data);
							return single_record;
						} else
							return;
					}
				}
			});
	    	
	    	$search.bind('typeahead:select', function(ev, suggestion) {
			  window.location.href = suggestion.link;
			});
			$search.bind('typeahead:open', function(ev, suggestion) {
			  $search.parents('.search-form').addClass('open');
			});
			$search.bind('typeahead:close', function(ev, suggestion) {
			  $search.parents('.search-form').removeClass('open');
			});

	    }

	    function search_tag(data){
	    	var result_a = $('<a>').addClass('result_record_a').attr('href',data.link).text(data.title);
	    	var result_div = $('<div>').addClass('result_record').append(result_a);
	    	return result_div;
	    }		    
}
}( jQuery ));