(function ($, undefined) {

    var uri = "https://api.github.com/orgs/globocom/repos?callback=?"
        + "&per_page=100"
        + "&page=1";

    var TEMPLATE = '<div class="span4">' +
			       '	<div class="container-inner">' +
				   '      <h2>#{title}</h2>' +
				   '       <p>#{description}</p>' +
				   '      <p>' +
				   '      	<a class="btn" href="#{html_url}">View details &raquo;</a>' +
				   '      </p>' +
			       '  	</div>' +
			       '	<div class="countdown-break"></div>' +
			       '</div>';


	$.getJSON(uri, function (result) {
	  if (result.data && result.data.length > 0) {

	  	var repos = "", item = "";

	  	for ( var i = 0; i < result.data.length ; i++ ) {

	  		repos += TEMPLATE.replace("#{title}", result.data[i].name)
                         .replace("#{description}", result.data[i].description)
	  						         .replace("#{html_url}", result.data[i].html_url);

			// repos += ( i % 3 === 0 && i > 1 ) ? '<br class="clear">' : '';
	  	}

	  	$(".repos").append(repos);
	  }
	  else {
	  }
	});

      // $.getJSON("https://api.github.com/orgs/twitter/members?callback=?", function (result) {
      //   var members = result.data;

      //   $(function () {
      //     $("#num-members").text(members.length);
      //   });
      // });
      // }

    })(jQuery);