//here we are js-csript;
//accordian, page interface using jguery.
  var action = "click";
  var speed = "600";// fade speed

  $(document).ready(function() {
    $('li.q').on(action, function() {
//get next element
        $(this).next()
        .slideToggle(speed)
        //select all other answers
          .siblings('li.a')
          .slideUp();
//get img for active question
  var img = $(this).children('img');
  //remove oter querstions arrows
  $('img').not(img).removeClass('rotate');
  //toggle rotate class
  img.toggleClass('rotate');// join from css rotate class
});
  });
  //part for tasks
  //2
  function distCacl(){
  var x1 = 1;
  var y1 = 1;
  var x2 = parseInt(prompt("Enter a Value", "0"));
  var y2 = parseInt(prompt("Enter a Value", "0"));

  var result = alert('Distance between points A('+x1+','+y1+') and B('+x2+','+y2+') is ' + distance( x1, y1, x2, y2 ));
//result = alert(x2 + y2);

function distance( x1, y1, x2, y2 )
{
  return Math.sqrt( Math.pow( ( x2 - x1 ) , 2 ) + Math.pow( ( y2 - y1 ) , 2 ) );
}

}
//1
function promtpQuestions(){
  var qName = prompt("Please enter Name", "Michael");
  var qTime = prompt ("Please enter Time", "1:30 pm");
  var qPlace = prompt("Please enter Place", "Kiev");
  var qEvent = prompt("Please enter Event", "Vasilivska str.");

console.log(qName + " has a meeting today at " + qTime +" on "+ qEvent + " in " + qPlace);
}
//4
function board(size) {

    var odd=size%2,
        s=odd?size-1:size,
        r1 = " #",
        //first row
        row1 = r1,
        //second row base
        r2 = "# ",
        //second row
        row2 = r2,
        // total size of board, including newlines
        total = (size*size)+size,
        // output
        out = "",
        // our board base
        o;

    if(!s) {
        return r1[0];
    }

    for(n=2;2*n<s;n*=2) {
        row1+=row1;
        row2+=row2;
    }

    //  second loop adds bases until we have the size length
    while(row1.length<s) {
        row1+=r1;
        row2+=r2;
    }

    if(odd) {
        row1+=r1[0];
        row2+=r2[0];
    }

    row1+="\n";
    row2+="\n";
    out = o = row1+row2;

    for(n=2;2*n<s;n*=2) {
        out+=out;
    }

    // add the base until we're complete or 1 row off (if odd)
    while(out.length+size+1<total) {
        out+=o;
    }

    if(odd) {
        out+=row1;
    }
    return out;
}
// function call with size, returns chessboard string
//3
function triAngle(){
  for (var line = "#"; line.length < 11; line += "#")
  console.log(line);
}
//5
function guessNumber() {
    var number = Math.random() * 101 | 0,
        guess,
        userMsg = 'Guess a number:';
          console.log(number);
    do {
        guess = prompt(userMsg);
        if (number < guess) {
            userMsg = "Our number is lower, try again";
        } else if (number > guess) {
            userMsg = "Our number is higher, try again";
        }
    } while (guess != number);
    alert("You are right, the number is " + number);

}
