	autoTyping({
		container : document.querySelector('.auto-typing'),
			 text : ['this is ' , 'the top', 'font-famaily list', 'using people most' ,'time More..'],
			 loop : true, //optional
		typeSpeed : 150,
		loopSpeed : 700,
			color : ['red','green','blue'],//optional
			blink : true, //optional
	   blinkSpeed : 400,
		blinkType : 'default', // flatted;

	}).start();