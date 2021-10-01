var game =
{
	current_question: 0,
	setup: function()
	{
		this.load(questions[0]);
	},
	load: function(question)
	{
		$('#prompt').html(question.get_prompt_text());
		this.current_question = question.id;
		
		var option_html = "";
		for (i = 0; i < question.options.length; i += 1)
		{
			option_html += 
				`<p><input type="radio"
					name="radio_group"
					id="option_${i}"
					value="${i}"
					${i == 0 ? "checked" : ""}>
				<label for="option_${i}">
					${question.options[i].option_text}
					</label></p>`
		}
		option_html += "<input type='submit'>";
		
		$('#option_form').html(option_html);
	},
	submit: function()
	{
		$('#player_input').val("");
		if (questions[this.current_question]
			.options[document.querySelector('input[name="radio_group"]:checked').value]
			.option_submit())
		{
			this.load(questions[this.current_question+1]);
		}
	}
};