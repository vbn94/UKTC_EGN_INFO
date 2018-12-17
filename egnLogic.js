function checkEGN(egn){
	if(egn.match("^[0-9]{10}$") == null){
		return false;
	}
	var egnTable = [2, 4, 8, 5, 10, 9, 7, 3, 6];
	var control = 0;
	for (var i = 0; i < 9; i++){
		control += parseInt(egn[i]) * egnTable[i];
	}
	var control = ((control % 11) >= 10) ? 0 : (control % 11);
	
	var d10 = parseInt(egn[9]);
	
	if (control == d10){
		return true;
	} else {
		return false;
	}
}

function egnYear(egn){
	var monthNum = parseInt(egn[2]) * 10 + parseInt(egn[3]);
	if (monthNum <= 12) {
		return 1900 + (parseInt(egn[0]) * 10 + parseInt(egn[1]));
	} else if (monthNum <= 32){
		return 1800 + (parseInt(egn[0]) * 10 + parseInt(egn[1]));
	} else {
		return 2000 + (parseInt(egn[0]) * 10 + parseInt(egn[1]));
	}
} 

function egnMonth(egn){
	var monthNum = parseInt(egn[2]) * 10 + parseInt(egn[3]);
	if (monthNum <= 12) {
		return monthNum;
	} else if (monthNum <= 32){
		return monthNum - 20;
	} else {
		return monthNum - 40;
	}
}

function monthStr(month){
	switch (month){
		case 1: return "Януари"; break;
		case 2: return "Февруари"; break;
		case 3: return "Март"; break;
		case 4: return "Април"; break;
		case 5: return "Май"; break;
		case 6: return "Юни"; break;
		case 7: return "Юли"; break;
		case 8: return "Август"; break;
		case 9: return "Септември"; break;
		case 10: return "Октомври"; break;
		case 11: return "Ноември"; break;
		case 12: return "Декември"; break;
	}
}

function egnDay(egn){
	var day =  parseInt(egn[4]) * 10 + parseInt(egn[5]);
	return day;
}

function dateOfBirth(egn){
	var year = egnYear(egn); 
	var month = monthStr(egnMonth(egn)); 
	var day = egnDay(egn);
	return day + " " + month + " " + year;
}

function pol(egn){
	if (parseInt(egn[8]) % 2 == 0){
		return "мъж";
	} else {
		return "жена";
	}
}

function birthRegion(egn){
	var num = parseInt(egn[6]) * 100 + parseInt(egn[7]) * 10 + parseInt(egn[8]);
	if (num <= 43){
		return "Благоевград";
	} else if (num < 93){
		return "Бургас";
	} else if (num < 139){
		return "Варна";
	} else if (num < 169){
		return "Велико търново";
	} else if (num < 183){
		return "Видин";
	} else if (num < 217){
		return "Враца";
	} else if (num < 233){
		return "Габрово";
	} else if (num < 281){
		return "Кърджали";
	} else if (num < 301){
		return "Кюстендил";
	} else if (num < 319){
		return "Ловеч";
	} else if (num < 341){
		return "Монтана";
	} else if (num < 377){
		return "Пазарджик";
	} else if (num < 395){
		return "Перник";
	} else if (num < 435){
		return "Плевен";
	} else if (num < 501){
		return "Пловдив";
	} else if (num < 527){
		return "Разград";
	} else if (num < 555){
		return "Русе";
	} else if (num < 575){
		return "Силистра";
	} else if (num < 601){
		return "Сливен";
	} else if (num < 623){
		return "Смолян";
	} else if (num < 721){
		return "София-град";
	} else if (num < 751){
		return "София-окръг";
	} else if (num < 789){
		return "Стара загора";
	} else if (num < 821){
		return "Добрич";
	} else if (num < 843){
		return "Търговище";
	} else if (num < 871){
		return "Хасково";
	} else if (num < 903){
		return "Шумен";
	} else if (num < 925){
		return "Ямбол";
	} else {
		return "Друг/Неизвестен";
	} 
}

function check(){
	var input = document.forms["egn-form"]["egn-input"].value;
	if (checkEGN(input)){
		document.getElementById("valid").innerHTML = "Валидно ЕГН.";
		document.getElementById("date").innerHTML = "Дата на раждане: " + dateOfBirth(input);
		document.getElementById("pol").innerHTML = "Пол: " + pol(input);
		document.getElementById("region").innerHTML = "Регион: " + birthRegion(input);
	} else {
		document.getElementById("valid").innerHTML = "Невалидно ЕГН!";
		document.getElementById("date").innerHTML = "";
		document.getElementById("pol").innerHTML = "";
		document.getElementById("region").innerHTML = "";
		alert("Невалидно ЕГН.");
	}
}

function clean(){
	document.getElementById("egnForm").reset();
}