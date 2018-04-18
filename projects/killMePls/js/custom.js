var currLevel = document.getElementById("currLevel");
var levelNr = document.getElementById("levelNr");

var level4Clicks=4;

var task1 = document.getElementById("task1");
var task2 = document.getElementById("task2");
var task3 = document.getElementById("task3");

var carousel1 = document.getElementById("carousel1");
var carousel2 = document.getElementById("carousel2");
var carousel3 = document.getElementById("carousel3");

var taskText1 = document.getElementById("taskText1");
var taskText2 = document.getElementById("taskText2");
var taskText3 = document.getElementById("taskText3");

task2.style.backgroundColor = 'transparent';
task3.style.backgroundColor = 'transparent';
taskText2.style.display = 'none';
taskText3.style.display = 'none';

var clicknr = 0;

function stepOne() {
    task1.style.backgroundColor = 'transparent';
    taskText1.style.display = 'none';
    carousel1.style.background = 'white';
    task2.style.backgroundColor = 'lightslategray';
    taskText2.style.display = 'initial';
}
// second subtask
function stepTwo() {
    task2.style.backgroundColor = 'transparent';
    taskText2.style.display = 'none';
    carousel2.style.background = 'white';
    task3.style.backgroundColor = 'lightslategray';
    taskText3.style.display = 'initial';
}
// third subtask
function stepThree(){
    task3.style.backgroundColor = 'transparent';
    taskText3.style.display = 'none';
    carousel3.style.background = 'white';
}

// $("body").click(function (e){
// 	console.log('click happend');
// 	// change level
// 	levelNr.textContent = clicknr;
//
// 	clicknr++;
// 	// first subtask
//
// });
var vtimeout1, vtimeout2, vtimeout3;
function timeout1() {
   vtimeout1=setTimeout(function () {

        task1.style.backgroundColor = 'transparent';
        taskText1.style.display = 'none';
        carousel1.style.background = 'white';
        task2.style.backgroundColor = 'lightslategray';
        taskText2.style.display = 'initial';

    }, 3000);
}


function timeout2() {
    vtimeout2=setTimeout(function () {

        task2.style.backgroundColor = 'transparent';
        taskText2.style.display = 'none';
        carousel2.style.background = 'white';
        task3.style.backgroundColor = 'lightslategray';
        taskText3.style.display = 'initial';

    }, 6000);
}

function timeout3() {
    vtimeout3=setTimeout(function () {
        task3.style.backgroundColor = 'transparent';
        taskText3.style.display = 'none';
        carousel3.style.background = 'white';

    }, 9000);
}
var myVar1=timeout1();
var myVar2=timeout2();
var myVar3=timeout3();
var images = ["level4_gif1.gif","level4_gif2.gif","level4_gif3.gif","level4_gif4.gif","level4_gif5.gif","level5_gif1.gif","level5_gif2.gif","level5_gif3.gif","level5_gif4.gif","level6_gif1.gif","level6_gif2.gif","level6_gif3.gif","level6_gif4.gif","level6_gif5.gif"
];
function changeBg1(name) {
    document.body.style.backgroundImage = "url('images/"+name+"')";
    console.log("url('images/"+name+"')")
}

$("body").click(function (e){

	console.log('click happend');
	// change level
    clearTimeout(vtimeout1);
    clearTimeout(vtimeout2);
	clearTimeout(vtimeout3);
	// first subtask

    changeBg1(images[clicknr]);
    clicknr++;

    if (clicknr==level4Clicks) {
        $(".yellowScreen").css("display", "block");
        setTimeout(function(){$(".yellowScreen").css("display", "none")}, 3000);
        setTimeout(function(){document.body.style.backgroundImage = "url('images/level4_gif1.gif')"},3500);

    }
});







