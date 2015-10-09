var $contactForm = $('#contact-form');
	$contactForm.submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: '//formspree.io/lucy.wang@uwaterloo.ca',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			beforeSend: function() {
			},
			success: function(data) {
				alert("Message sent!");
				window.location="#contact";
			},
			error: function(err) {
				alert("Opps, there was an error!");
			}
		});
	})