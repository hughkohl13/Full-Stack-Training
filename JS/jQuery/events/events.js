//click()
//keypress()
//on() used 99% of the times

//-----------------------------------
//CLICK() METHOD:

//print when item with id 'submit is clicked

$("#submit").click(function(){
  console.log("another click");
});

//alerts when ANY buttin is clicked
$("button").click(function(){
  alert("somone clicked button");
});

//in vanJS to add an event lister to a collection of buttons
  // SELECT them all with querySelector
  // for loop to loop thorugh all of them
  // then add an event lsner

//when all button are clicked change the background when clicked
  $("button").click(function(){
    $(this).css("background", "pink") //this will refer to the element that was clicked on
  });

  //do not forget to use the jquery version of this

  //another ie:
  $("button").click(function(){
    var text = $(this).text();
    console.log("you clicked" + text);
  });

  // refering to elements that are clicked



//--------------------------------------------

//KEYPRESS() METHOD:

//keyup(), keydown(), keypress(), check the docs for more!

//works kinda like the click method in that,
//select something, chain on .keypress and pass in a callback function

//anytime a key is pressed in an input field consolelog something
$("input").keypress(function(){
  console.log("key pressed");
});
// type a key and you should see a console log for every charater

//run a code based off a key pressed?
$("input").keypress(function(event){//event obj will contain information
  console.log("event");
});