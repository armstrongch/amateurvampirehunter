var questions = 
[
	{
		id: 0,
		get_prompt_text: function()
		{ 
			return "<p>Welcome to:</p>" +
			"<p>Amateur Vampire Hunter</p>" +
			"<p>a game by Chris 'Turd Boomerang' Armstrong</p>";
		},
		options:
		[
			{option_text: "Begin",
			option_submit: function() {return true;}},
			{option_text: "Don't begin",
			option_submit: function() {return false;}}
		]
	},
	{
		id: 1,
		prompt_text: "",
		get_prompt_text: function()
		{ 
			return "<p>Welcome.</p>" +
				"<p>The following series of questions will guide you " + 
				"through a mock vampire hunt, and your answers will " +
				"be used to gauge your ability to hunt down Count Dracula, " +
				"leader of the vampires.</p>";
		},
		options:
		[
			{option_text: "Okay.",
			option_submit: function() {return false;}},
			{option_text: "Oh, Hell yeah! I'm gonna hunt you one day, Count Dracula!",
			option_submit: function() {return false;}}
		]
	}
];