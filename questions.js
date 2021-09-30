var questions = 
[
	{
		id: 0,
		prompt_text: 
			"welcome to" + "<br/>" +
			"amateur vampire hunter" + "<br/>" +
			"a game by chris 'turd boomerang' armstrong" + "<br/>" +
			"what is your name?",
		submit_function: function(submitted_value)
		{
			if (submitted_value.length > 0)
			{
				game.player_name = submitted_value;
				questions[1].prompt_text = `welcome, ${game.player_name}`;
			}
			return true;
		}
	},
	{
		id: 1,
		prompt_text: 
			`welcome, ${game.player_name}`,
		submit_function: function()
		{
			return false;
		}
	}
];