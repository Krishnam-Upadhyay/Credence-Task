/* function sayHi(){
    alert("Hello");
}
window.sayHi(); */

/* alert(window.innerHeight);//inner Height */

//changing the background color to red
/*
setTimeout(()=>{
    document.body.style.backgroundColor = "green";
},1000)
 */

/* alert(location.href);
if(confirm("Go to wikipedia?")){
    location.href = "https://wikipedia.org";
}
 */


//DOM TREE <************************>

/* document.body.style.background = "red",
setTimeout(() => document.body.style.background = "",3000)
 */

//TASK1
/* document.body.firstElementChild

document.body.children[0]
 */
/* document.body.childNodes[1]

document.body.lastElementChild
document.body.lastElementChild.lastElementChild */

// sEARCHING : GETeLEMENT*,QUERYsELECTOR*


/* document.body.myData = {
    name:"Caesar",
    title:"Imperator"
};*/
/* alert(document.body.myData.title);
document.body.sa
 */

/* document.body.sayTagName = function(){
    alert(this.tagName);
}
document.body.sayTagName(); */

/* Element.prototype.sayHi = function(){
    alert("Hello,I'm "+this.tagName);
}
document.documentElement.sayHi();
document.body.sayHi(); */

/* //CREATING NEW ELEMENT;
let div = document.createElement('div');

//CREATING A NEW TEXT NODE
let textNode = document.createTextNode("Here I am");
 */

/* let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = "<strong>Hi THere</strong>";
document.body.append(div); */


/* let input = document.querySelector("input");

input.setAttribute('value', 'text');
input.value = 'newValue';
alert(input.getAttribute('value')); */


/* alert(input.getAttribute('checked'));
alert(input.checked);

 */

//NON STANDARD ATTRIBUTES, DATASET

/* let user = {
    name: "Pete",
    age: 25
};
for(let div of document.querySelectorAll('[show-info]')){
    let field = div.getAtrribute('show-info');
    div.innerHTML = user[field];
}  */

//TASK1
/* let elem = document.querySelector('[data-widget-name]');

alert(elem.getAttribute('data-widget-name))')) */


//TASK2
/* let link = document.querySelector('a');
link.style.color ='orange';
 */



//MODIGYING THE DOCUMENT<*****************************************************************************>


//creatiing an element  *******************

/* let div = document.createElement('div');

let textNode = document.createTextNode("Here I am");

 */
//Creating the message **********************8

/* let div = document.createElement('div');
div.className = 'alert';

div.innerHTML = "<strong>Hi THere</strong>"; */

//INSERTION METHODS *******************************
/* let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = "<strong>Hi there";

document.body.append(div);

 */

/* div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
div.insertAdjacentHTML('afterend', '<p>Bye</p>'); */

//NODE REMOVAL ********************************************


/* let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

document.body.append(div);
setTimeout(() => div.remove(), 1000); */




//CLONING NODES : CLONENODE********************************************************************************
/* let div2 = div.cloneNode(true);
div2.querySelector('strong').innerHTML = "BY THERE";

div.after(div2); */



//DOCUMENTFRAGMENT

/* function getListContent(){

let fragment = new DocumentFrangment();
for(leti=1; i<=3; i++){
    let li = document.createElement('li');
    li.append(i);

}
return fragment;
}
URL.append(getListContent());
 */



//TASK1 ****************************
/* unction clear(elem){
    for(let i=0;i<elem.chileNodes.length;i++){
        elem.chileNodes[i].remove();
    }
} */


//TASK2
/* let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let data = prompt("Enter the text for the list item", "");

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}
 */




//Element size and scrolling *****************************************************************************

/* alert(document.body.className); */

/* document.body.classList.add('article'); */

//iterating
/* for (let name of document.body.classList){
    alert(name);
} */

//Resetting the style
/* document.body.style.display = 'none';
setTimeout(()=>document.body.style.display = "",1000); */

/* document.body.style.background ='red';
setTimeout(()=>document.body.style.removeProperty("background"),1000); */


//MIND THE UNIT

/* document.body.style.margin = '20px';
alert(document.body.style.margin);
alert(document.body.marginTop);
alert(document.body.marginLeft); */

//COMPUTED STYLES GETCOMPUTEDSTYLE

/* alert(document.body.style.color); */

//TASK
/* function showNotification({ top = 0, right = 0, className, html }) {

    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
        notification.classList.add(className);
    }

    notification.style.top = top + 'px';
    notification.style.right = right + 'px';

    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
}

// test it
let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
    });
}, 2000); */




//ELEMENT SIZE AND SCROLLING**************************************************************************************************************

//OFFSET PARNENT;
/* alert(example.offsetParent.id);
alert(example.offsetLeft);
alert(example.offsetTop);  */


//OFFSET WIDTH/HEIGTH

//dlcient top client left

/* alert('Current scroll from the top: ' + window.pageYOffset);
alert('Current scroll from the left: ' + window.pageXOffset); */


//CoOrdinates

//elementFrom Point(x,y)

/* let centerX = document.documentElement.clientWidth/2;
let centerY = document.documentElement.clientHeight/2;

let elem = document.elementFromPoint(centerX, centerY);
elem.style.background ="red";
alert(elem.tagName); */


//USING FOR "FIxe" positioning

/* let elem = document.getElementById("corrds-show-mark");

function createMessageUnder(elem,html){
    let message = document.createElement('div');
    message.style.cssText = "Postion:fixed; color: red";

    let coords = elem.getBoundingClientRect();
    message.style.left =  coords.left +"px";
    message.style.top = coords.bottom+ "px";

    message.innerHTML = html;
    return message;
}
    let message = createMessageUnder(elem,"Hello,World!");
    document.body.append(message);
    setTimeout(()=>message.remove(),5000); */



    //Documents Corrdinates

/* function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}
function createMessageUnder(elem, html) {
    let message = document.createElement('div');
    message.style.cssText = "position:absolute; color: red";

    let coords = getCoords(elem);

    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";

    message.innerHTML = html;

    return message;
} */























































