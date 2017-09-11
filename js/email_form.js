	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Еhe Email was sent!");
			$("#form").trigger("reset");
		});
		return false;
	});
