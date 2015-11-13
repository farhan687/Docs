(function($) {
	$.fn.searchAppbase = function(searchIndexUrl) {
		var $search = this;
		$search.addClass('appbase-search');

		function searchTag(data) {
			var result_a = $('<a>').addClass('result_record_a').attr('href', data.link).text(data.title);
			var result_div = $('<div>').addClass('result_record').append(result_a);
			return result_div;
		}
		var fail = function() {
			console.error("Your search index wasn't loaded, please check the following error", e);
		};
		var success = function(searchData) {
			var searchData = JSON.parse(searchData);
			searchData.forEach(function(searchSingle) {
				searchSingle.content = searchSingle.content.replace(/<\/?[^>]+(>|$)/g, " ");
			});

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
				source: posts,
				templates: {
					pending: true,
					suggestion: function(data) {
						if (data) {
							var single_record = searchTag(data);
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
		};
		$.get(searchIndexUrl)
			.then(success)
			.fail(fail);
	}
}(jQuery));