var mark = document.getElementsByTagName('mark')[0];
var chb1 = document.getElementById('chb1');
var chb2 = document.getElementById('chb2');
var chb3 = document.getElementById('chb3');
var nextBtn = document.getElementById('nextBtn');
var result = document.getElementById('result');
var holerik = 0;
var sangvinik = 0;
var flegmatik = 0;
var melanholik = 0;
var questionCount = 1;
var questionsSize = 80;


document.getElementById('startDiv').onclick = function() {
	beginTest();
};
nextBtn.onclick = function() {
	goNext(questionCount);
};

function beginTest() {
	var startBtn = document.getElementById('startBtn');
	var startDiv = document.getElementById('startDiv');
	var question = document.getElementById('question');
	var nextBtn = document.getElementById('nextBtn');
	var main = document.getElementById('main');

	result.style.display = 'none';
	startDiv.style.display = 'none';
	startBtn.style.display = 'none';
	question.style.display = 'block';
	nextBtn.style.display = 'block';
	questionCount = 1;
	goNext(questionCount);
}

function goNext(count) {

  // console.log('goNext' + questionCount);
	checkResult();
  switch (count) {
    case 1:
      getQuestion1();
      questionCount++;
      break;
    case 2:
      getQuestion2();
      questionCount++;
      break;
    case 3:
      getQuestion3();
      questionCount++;
      break;
    case 4:
      getQuestion4();
      questionCount++;
      break;
    case 5:
      getQuestion5();
      questionCount++;
      break;
    case 6:
      getQuestion6();
      questionCount++;
      break;
    case 7:
      getQuestion7();
      questionCount++;
      break;
    case 8:
      getQuestion8();
      questionCount++;
      break;
    case 9:
      getQuestion9();
      questionCount++;
      break;
    case 10:
      getQuestion10();
      questionCount++;
      break;
    case 11:
      getQuestion11();
      questionCount++;
      break;
    case 12:
      getQuestion12();
      questionCount++;
      break;
    case 13:
      getQuestion13();
      questionCount++;
      break;
    case 14:
      getQuestion14();
      questionCount++;
      break;
    case 15:
      getQuestion15();
      questionCount++;
      break;
    case 16:
      getQuestion16();
      questionCount++;
      break;
    case 17:
      getQuestion17();
      questionCount++;
      break;
    case 18:
      getQuestion18();
      questionCount++;
      break;
    case 19:
      getQuestion19();
      questionCount++;
      break;
    case 20:
      getQuestion20();
      questionCount++;
      nextBtn.innerHTML = 'Показать результат';
      break;
    case 21:
      showResult();
      nextBtn.innerHTML = 'Начать заново';
			questionCount++;
      break;
    case 22:
			nextBtn.innerHTML = 'Дальше';
      beginTest();
      break;
    default:
      showResult();
  }
}

function getQuestion1() {
	mark.innerHTML = '#1';
	chb1.innerHTML = 'Я суетлив и неусидчив.';
	chb2.innerHTML = 'Я – жизнерадостный человек.';
	chb3.innerHTML = 'Обычно я спокоен и хладнокровен.';
	chb4.innerHTML = 'Я застенчив и стеснителен.';
}
function getQuestion2() {
	mark.innerHTML = '#2';
	chb1.innerHTML = 'Я несдержан и вспыльчив.';
	chb2.innerHTML = 'Я энергичен и всегда знаю, куда направить свою энергию.';
	chb3.innerHTML = 'Во всех своих делах я придерживаюсь определенной последовательности.';
	chb4.innerHTML = 'В незнакомой обстановке я чувствую себя растерянным.';
}
function getQuestion3() {
	mark.innerHTML = '#3';
	chb1.innerHTML = 'Я нетерпелив.';
	chb2.innerHTML = 'Я не всегда довожу до конца то, что начал.';
	chb3.innerHTML = 'Обычно я рассудителен и осторожен.';
	chb4.innerHTML = 'Мне трудно заговорить с незнакомым человеком.';
}
function getQuestion4() {
	mark.innerHTML = '#4';
	chb1.innerHTML = 'Я резок и прямолинеен в общении.';
	chb2.innerHTML = 'Я часто себя переоцениваю.';
	chb3.innerHTML = 'Я спокойно переношу ожидание.';
	chb4.innerHTML = 'Порой я не верю в свои силы.';
}
function getQuestion5() {
	mark.innerHTML = '#5';
	chb1.innerHTML = 'Я часто являюсь инициатором всевозможных мероприятий.';
	chb2.innerHTML = 'Все новое я схватываю буквально на лету.';
	chb3.innerHTML = 'Если мне нечего сказать, я предпочитаю молчать.';
	chb4.innerHTML = 'Я спокойно переношу одиночество.';
}
function getQuestion6() {
	mark.innerHTML = '#6';
	chb1.innerHTML = 'Я упрям.';
	chb2.innerHTML = 'Мои интересы непостоянны.';
	chb3.innerHTML = 'Моя речь размеренна и спокойна, без яркой эмоциональной окраски.';
	chb4.innerHTML = 'Неудачи угнетают меня.';
}
function getQuestion7() {
	mark.innerHTML = '#7';
	chb1.innerHTML = 'В споре я очень находчив.';
	chb2.innerHTML = 'Свои неудачи я переживаю довольно легко.';
	chb3.innerHTML = 'Я сдержан и терпелив.';
	chb4.innerHTML = 'Иногда я надолго ухожу в себя.';
}
function getQuestion8() {
	mark.innerHTML = '#8';
	chb1.innerHTML = 'Мне трудно соблюдать определенный ритм в работе.';
	chb2.innerHTML = 'Мне легко приспособиться к практически любым обстоятельствам.';
	chb3.innerHTML = 'Я обычно довожу то, что начал, до конца.';
	chb4.innerHTML = 'Я быстро утомляюсь.';
}
function getQuestion9() {
	mark.innerHTML = '#9';
	chb1.innerHTML = 'Я часто иду на риск.';
	chb2.innerHTML = 'Любое дело, которым я занимаюсь, увлекает меня.';
	chb3.innerHTML = 'Я не трачу силы на пустяки, но могу быть очень работоспособным, если вижу, что дело того стоит.';
	chb4.innerHTML = 'Я говорю очень тихо, иногда почти шепотом.';
}
function getQuestion10() {
	mark.innerHTML = '#10';
	chb1.innerHTML = 'Я не помню обид';
	chb2.innerHTML = 'Как только мой интерес к делу угасает, я, как правило, бросаю его.';
	chb3.innerHTML = 'В работе и в жизни я придерживаюсь привычной схемы.';
	chb4.innerHTML = 'Я всегда подстраиваюсь под моего собеседника.';
}
function getQuestion11() {
	mark.innerHTML = '#11';
	chb1.innerHTML = 'Я говорю очень быстро и возбужденно.';
	chb2.innerHTML = 'Я легко включаюсь в новую работу, а также переключаюсь с одного вида деятельности на другой.';
	chb3.innerHTML = 'Мне легко сдержать свои эмоции.';
	chb4.innerHTML = 'Иногда что-то впечатляет меня настолько, что я не могу сдержать слез.';
}
function getQuestion12() {
	mark.innerHTML = '#12';
	chb1.innerHTML = 'Я неуравновешен и часто горячусь из-за мелочей.';
	chb2.innerHTML = 'Монотонная кропотливая работа угнетает меня.';
	chb3.innerHTML = 'Похвала или критика в мой адрес мало волнуют меня.';
	chb4.innerHTML = 'Я очень чувствителен к похвале или критике.';
}
function getQuestion13() {
	mark.innerHTML = '#13';
	chb1.innerHTML = 'Я нетерпим к недостаткам других.';
	chb2.innerHTML = 'Я общителен и отзывчив, у меня много друзей.';
	chb3.innerHTML = 'К шуткам в свой адрес я отношусь снисходительно.';
	chb4.innerHTML = 'Я предъявляю высокие требования к себе и окружающим.';
}
function getQuestion14() {
	mark.innerHTML = '#14';
	chb1.innerHTML = 'Я люблю дразнить людей.';
	chb2.innerHTML = 'У меня высокая работоспособность, я очень вынослив.';
	chb3.innerHTML = 'Мои интересы отличаются постоянством.';
	chb4.innerHTML = 'Я бываю мнительным и подозрительным.';
}
function getQuestion15() {
	mark.innerHTML = '#15';
	chb1.innerHTML = 'Моя мимика очень выразительна.';
	chb2.innerHTML = 'Я говорю обычно громко, быстро и четко.';
	chb3.innerHTML = 'Я медленно втягиваюсь в работу или переключаюсь с одного вида деятельности на другой..';
	chb4.innerHTML = 'Я легкоранимый человек.';
}
function getQuestion16() {
	mark.innerHTML = '#16';
	chb1.innerHTML = 'Я быстро принимаю решения.';
	chb2.innerHTML = 'Даже в сложных и непредвиденных обстоятельствах я не теряю самообладания.';
	chb3.innerHTML = 'Обычно у меня ровные отношения со всеми.';
	chb4.innerHTML = 'Меня легко обидеть.';
}
function getQuestion17() {
	mark.innerHTML = '#17';
	chb1.innerHTML = 'Меня привлекает все новое.';
	chb2.innerHTML = 'Я всегда доброжелательно настроен.';
	chb3.innerHTML = 'Я аккуратен и люблю порядок во всем.';
	chb4.innerHTML = 'Я предпочитаю скрывать свои мысли от окружающих.';
}
function getQuestion18() {
	mark.innerHTML = '#18';
	chb1.innerHTML = 'Мои движения порывисты и резки.';
	chb2.innerHTML = 'Я обычно без труда засыпаю и просыпаюсь.';
	chb3.innerHTML = 'Мне трудно адаптироваться к новой обстановке.';
	chb4.innerHTML = 'Я робок и малоактивен.';
}
function getQuestion19() {
	mark.innerHTML = '#19';
	chb1.innerHTML = 'Я всегда настойчиво иду к поставленной цели.';
	chb2.innerHTML = 'Я часто принимаю поспешные, необдуманные решения.';
	chb3.innerHTML = 'Я очень выдержан.';
	chb4.innerHTML = 'Я обычно безропотно подчиняюсь приказам.';
}
function getQuestion20() {
	mark.innerHTML = '#20';
	chb1.innerHTML = 'У меня часто без особых причин меняется настроение.';
	chb2.innerHTML = 'Иногда я слушаю кого-то невнимательно, не вникая в суть рассказа.';
	chb3.innerHTML = 'Контакт с новыми людьми я налаживаю постепенно.';
	chb4.innerHTML = 'Мне хотелось бы вызвать у окружающих сочувствие ко мне.';
}
var questions = [
	/*холерик*/
	// "Я суетлив и неусидчив.", //0
	// "Я несдержан и вспыльчив.",
	// "Я нетерпелив.",
	// "Я резок и прямолинеен в общении.",
	// "Я часто являюсь инициатором всевозможных мероприятий.",
	// "Я упрям.",
	// "В споре я очень находчив.",
	// "Мне трудно соблюдать определенный ритм в работе.",
	// "Я часто иду на риск.",
	// "Я не помню обид.",//9
	// "Я говорю очень быстро и возбужденно.",//10
	// "Я неуравновешен и часто горячусь из-за мелочей.",
	// "Я нетерпим к недостаткам других.",
	// "Я люблю дразнить людей.",
	// "Моя мимика очень выразительна.",
	// "Я быстро принимаю решения.",
	// "Меня привлекает все новое.",
	// "Мои движения порывисты и резки.",
	// "Я всегда настойчиво иду к поставленной цели.",
	// "У меня часто без особых причин меняется настроение.",//19


	/*сангвиник*/
	// "Я – жизнерадостный человек.",  //20
	// "Я энергичен и всегда знаю, куда направить свою энергию.",
	// "Я не всегда довожу до конца то, что начал.",
	// "Я часто себя переоцениваю.",
	// "Все новое я схватываю буквально на лету.",
	// "Мои интересы непостоянны.",
	// "Свои неудачи я переживаю довольно легко.",
	// "Мне легко приспособиться к практически любым обстоятельствам.",
	// "Любое дело, которым я занимаюсь, увлекает меня.",
	// "Как только мой интерес к делу угасает, я, как правило, бросаю его.",
	// "Я легко включаюсь в новую работу, а также переключаюсь с одного вида деятельности на другой.",//30
	// "Монотонная кропотливая работа угнетает меня.",
	// "Я общителен и отзывчив, у меня много друзей.",
	// "У меня высокая работоспособность, я очень вынослив.",
	// "Я говорю обычно громко, быстро и четко.",
	// "Даже в сложных и непредвиденных обстоятельствах я не теряю самообладания.",
	// "Я всегда доброжелательно настроен.",
	// "Я обычно без труда засыпаю и просыпаюсь.",
	// "Я часто принимаю поспешные, необдуманные решения.",
	// "Иногда я слушаю кого-то невнимательно, не вникая в суть рассказа.",


	/*флегматик*/
	// "Обычно я спокоен и хладнокровен.", //40
	// "Во всех своих делах я придерживаюсь определенной последовательности.",
	// "Обычно я рассудителен и осторожен.",
	// "Я спокойно переношу ожидание.",
	// "Если мне нечего сказать, я предпочитаю молчать.",
	// "Моя речь размеренна и спокойна, без яркой эмоциональной окраски.",
	// "Я сдержан и терпелив.",
	// "Я обычно довожу то, что начал, до конца.",
	// "Я не трачу силы на пустяки, но могу быть очень работоспособным, если вижу, что дело того стоит.",
	// "В работе и в жизни я придерживаюсь привычной схемы.",
	// "Мне легко сдержать свои эмоции.",
	// "Похвала или критика в мой адрес мало волнуют меня.",
	// "К шуткам в свой адрес я отношусь снисходительно.",
	// "Мои интересы отличаются постоянством.",
	// "Я медленно втягиваюсь в работу или переключаюсь с одного вида деятельности на другой.",
	// "Обычно у меня ровные отношения со всеми.",
	// "Я аккуратен и люблю порядок во всем.",
	// "Мне трудно адаптироваться к новой обстановке.",
	// "Я очень выдержан.",
	// "Контакт с новыми людьми я налаживаю постепенно.",


	/*меланхолик*/
	// "Я застенчив и стеснителен.", //60
	// "В незнакомой обстановке я чувствую себя растерянным.",
	// "Мне трудно заговорить с незнакомым человеком.",
	// "Порой я не верю в свои силы.",
	// "Я спокойно переношу одиночество.",
	// "Неудачи угнетают меня.",
	// "Иногда я надолго ухожу в себя.",
	// "Я быстро утомляюсь.",
	// "Я говорю очень тихо, иногда почти шепотом.",
	// "Я всегда подстраиваюсь под моего собеседника.",
	// "Иногда что-то впечатляет меня настолько, что я не могу сдержать слез.",
	// "Я очень чувствителен к похвале или критике.",
	// "Я предъявляю высокие требования к себе и окружающим.",
	// "Я бываю мнительным и подозрительным.",
	// "Я легкоранимый человек.",
	// "Меня легко обидеть.",
	// "Я предпочитаю скрывать свои мысли от окружающих.",
	// "Я робок и малоактивен.",
	// "Я обычно безропотно подчиняюсь приказам.",
	// "Мне хотелось бы вызвать у окружающих сочувствие ко мне."
];




function checkResult() {
	var a = document.getElementById("a").checked;
	var b = document.getElementById("b").checked;
	var c = document.getElementById("c").checked;
	var d = document.getElementById("d").checked;

	if (a) {
		holerik++;
		// console.log('holerik '+holerik);
	}
	if (b) {
		sangvinik++;
		// console.log('sangvinik '+sangvinik);
	}
	if (c) {
		flegmatik++;
		// console.log('flegmatik '+flegmatik);
	}
	if (d) {
		melanholik++;
		// console.log('melanholik '+melanholik);
	}

	// console.log('Холерик: '+holerik+
	// 		', Сангвиник: '+sangvinik+
	// 		', Флегматик: '+flegmatik+
	// 		', Меланхолик: '+melanholik);

	document.getElementById("a").checked = false;
	document.getElementById("b").checked = false;
	document.getElementById("c").checked = false;
	document.getElementById("d").checked = false;

}

function showResult() {
	question.style.display = 'none';
	result.style.display = 'block';

	var sum = holerik+sangvinik+flegmatik+melanholik;
	holerik = parseInt((holerik/sum)*100);
	sangvinik = parseInt((sangvinik/sum)*100);
	flegmatik = parseInt((flegmatik/sum)*100);
	melanholik = parseInt((melanholik/sum)*100);

	result.innerHTML = '<b>Холерик:</b> '+holerik+
	'%<br> <b>Сангвиник:</b> '+sangvinik+
	'%<br> <b>Флегматик: </b>'+flegmatik+
	'%<br> <b>Меланхолик: </b>'+melanholik+'%';
}

// function randomInteger(min, max) {
//     var rand = min + Math.random() * (max + 1 - min);
//     rand = Math.floor(rand);
// 		// console.log(r + ' : '+ rand);
//     return rand;
// }
