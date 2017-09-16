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

document.getElementById('startBtn').onclick = function() {
	beginTest();
};
nextBtn.onclick = function() {
	goNext(questionCount);
};

function beginTest() {
	var startBtn = document.getElementById('startBtn');
	var question = document.getElementById('question');
	var nextBtn = document.getElementById('nextBtn');
	var main = document.getElementById('main');

	// var pos = 0;
	// var id = setInterval(frame, 10);
	// function frame() {
	//   if (pos == -1750) {
	//     clearInterval(id);
	//   } else {
	//     pos -= 70;
	//     startBtn.style.left = pos + 'px';
	//   }
	// }

	startBtn.style.display = 'none';
	question.style.display = 'block';
	nextBtn.style.display = 'block';
	questionCount = 1;
	goNext(questionCount);
}

function goNext(count) {
  console.log('goNext' + questionCount);
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
      nextBtn.innerHTML = 'Показать результат';
      break;
    case 9:
      showResult();
      nextBtn.innerHTML = 'Начать заново';
			questionCount++;
      break;
    case 10:
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

function checkResult() {
	var a = document.getElementById("a").checked;
	var b = document.getElementById("b").checked;
	var c = document.getElementById("c").checked;
	var d = document.getElementById("d").checked;

	if (a) {
		holerik++;
		console.log('holerik '+holerik);
	}
	if (b) {
		sangvinik++;
		console.log('sangvinik '+sangvinik);
	}
	if (c) {
		flegmatik++;
		console.log('flegmatik '+flegmatik);
	}
	if (d) {
		melanholik++;
		console.log('melanholik '+melanholik);
	}

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
