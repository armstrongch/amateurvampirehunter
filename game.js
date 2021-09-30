var game =
{
	current_question: 0,
	setup: function()
	{
		this.load(questions[0]);
	},
	load: function(question)
	{
		$('#prompt').html(question.prompt_text);
		this.current_question = question.id;
	},
	submit: function()
	{
		if (questions[this.current_question].submit_function($('#player_input').val().toUpperCase()))
		{
			this.load(questions[this.current_question+1]);
		}
		$('#player_input').val("");
	},
	
	player_name: "nameless one"
};