class MegaTimer
{
	constructor(the_period = 30, ascend = true)
	{
		this.period = 30;
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

		var instance = this;

	}

	getDisplayArea(div_id)
	{
		this.display_area = document.getElementById(div_id);
		this.showTime();
	}

	getButton(button_id)
	{
		this.button = document.getElementById(button_id);
		var instance = this;
		var timerTickCopy = this.timerTick;
		this.button.onclick = function()
								{
									console.log(instance.button);
									if (!instance.pause)
									{
										instance.pause = true;
										instance.button.innerHTML = "Go!";
										console.log("1");
									}
									else
									{
										instance.pause = false;
										instance.button.innerHTML = "Pause";
										console.log("2");
										window.setTimeout(timerTickCopy(), 1000);
									}
								}
		console.log("onclick binded");
		console.log(this.button);
	}

	reinit()
	{
		this.pause = true;
		this.button.innerHTML = "Go!";
	}

	showTime()
	{
		this.display_area.innerHTML = this.timer_value;
	}

	timerTick()
	{
		console.log("Tick!");
		console.log(instance.pause);
		if (!this.pause)
		{
			if (this.ascend)
			{
				this.timer_value++;
				if (this.timer_value == this.period)
				{
					this.timer_value = 0;
					this.reinit();
				}
			}
			else
			{
				this.timer_value--;				
				if (this.timer_value == 0)
				{
					this.timer_value = this.period;
					this.reinit();
				}
			}
			this.showTime();
			window.setTimeout(this.timerTick, 1000);
		}

	}
}


function output(the_string)
{
	var the_statusbar = document.getElementById("statusbar");
	var tmp_content = the_statusbar.innerHTML;
	the_statusbar.innerHTML = tmp_content + "<br>" + the_string;
	// the_statusbar.innerHTML += "<br>" + the_string;

}


