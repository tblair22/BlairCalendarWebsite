

const date = new Date('August 30 2021');
const currentYear = date.getYear();//2021


function calendar(){//todays date
	
	let d = new Date();

	setText(calendar-day, d.getDate();
	setText('calendar-date', d.getDay());
	setText('calendar-month-year', month[d.getMonth()]+  ' ' + (1900+ d.getYear());

}; 



function setText(id, val){//set value of <p> tags
	if (val < 10) {
		val = '0' + val; // if the date is less than 10 it will have a 0 before the number
	}
	document.getElementById(id).innerHTML = val;

};




//call calendar
window.onload = calendar;


