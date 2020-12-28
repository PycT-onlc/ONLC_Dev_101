class MegaTimer
{
	constructor(the_period = 30, ascend = true)
	{
		this.period = the_period;
		this.ascend = ascend;

		if (ascend)
		{
			this.timer_value = 0;		
		}
		else
		{
			this.timer_value = this.period;
		}

		this.pause = true;
		this.finished = false;

		var instance = this;

	}

	getDisplayArea(div_id)
	{
		this.display_area = document.getElementById(div_id);
		this.showTime();
	}

	buttonClick(instance)
	{
		if (!instance.pause)
		{
			instance.pause = true;
			instance.button.innerHTML = "Go!";
		}
		else
		{
			if (instance.finished)
			{
				instance.finished = false;
			}
			
			instance.pause = false;
			instance.button.innerHTML = "Pause";
			window.setTimeout( function()
									{ 
									instance.timerTick(instance);
								}, 1000);
		}

	}

	getButton(button_id)
	{
		this.button = document.getElementById(button_id);
		var instance = this;
		this.button.onclick = function()
								{
									instance.buttonClick(instance);
								}
		console.log("onclick binded");
		console.log(this.button);
	}

	reinit()
	{
		this.pause = true;
		this.button.innerHTML = "Go!";
		this.finished = true;
	}

	showTime()
	{
		this.display_area.innerHTML = this.timer_value;
	}

	timerTick(instance)
	{
		if (!instance.pause)
		{
			if (instance.ascend)
			{
				instance.timer_value++;
				if (instance.timer_value == instance.period)
				{
					instance.timer_value = 0;
					instance.reinit();
				}
			}
			else
			{
				instance.timer_value--;				
				if (instance.timer_value == 0)
				{
					instance.timer_value = instance.period;
					instance.reinit();
				}
			}
			instance.showTime();
			window.setTimeout( function()
								{ 
									instance.timerTick(instance);
								}, 1000);
		}

	}
}


function output(the_string)
{
	var the_statusbar = document.getElementById("statusbar");
	var tmp_content = the_statusbar.innerHTML;
	the_statusbar.innerHTML = tmp_content + "<br>" + the_string;
}


