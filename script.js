var hms = "12:30:00";
	var a = hms.split(':'); // split it at the colons

	// minutes are worth 60 seconds. Hours are worth 60 minutes.
	var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 

		if(seconds > 0)
		{	

	      function secondPassed() {
	      	  
	      	  
	          var minutes = Math.round((seconds - 30)/60),
	              remainingSeconds = seconds % 60;
                   var hour   =Math.floor((minutes)/60);
                    minutes = minutes%60;

	          if (remainingSeconds < 10) {
	              remainingSeconds = "0" + remainingSeconds;
	          }
              hour = ("0" + hour).slice(-2);
              minutes = ("0" + minutes).slice(-2);
              remainingSeconds= ("0" + remainingSeconds).slice(-2);

	          document.getElementById('countdown').innerHTML = hour +":" +minutes + ":" + remainingSeconds;
	          if (seconds == 0) {
	              clearInterval(countdownTimer);
	             //form1 is your form name
	            document.form_quiz.submit();
	          } else {
	              seconds--;
	          }
	      }
	      var countdownTimer = setInterval('secondPassed()', 1000);

	    }

const sideMenu = document.getElementById('sideMenu');
const sideNavi = document.getElementById('sideNavi');
const header = document.getElementsByName('header');
const body = document.body
let flag = true;

sideMenu.addEventListener('click', () => {
    if(flag) {
        sideNavi.style.width = "100%";
        
        flag = false;
    } else {
        sideNavi.style.width = "0";
        flag = true;
    }  
})

const enroll = document.getElementById('enroll');
enroll.addEventListener('click', () => {
    window.open('https://lk2.kub8.ru/amo/?h1=%D0%A0%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC&h2=%C2%AB%D0%A0%D0%B0%D0%B7%D0%B1%D0%BE%D1%80%20%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B5%D0%B2%20%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8%C2%BB%20(%D0%B2%20%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B5).%20%D0%A1%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D1%81%D0%BE%20%D1%81%D0%BA%D0%B8%D0%B4%D0%BA%D0%BE%D0%B9:%202200%20%D1%80%D1%83%D0%B1%D0%BB%D0%B5%D0%B9&btn=%D0%9A%D1%83%D0%BF%D0%B8%D1%82%D1%8C&inviter_id=0&utm_source=0&deal_name=%D0%A0%D0%A1%D0%96%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%20(%D0%92%20%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B5)%20&status_id=44009377&redirect=https://payment.kub8.ru/ru/payment/?id=95')
})