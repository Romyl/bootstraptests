console.log("loaded JS")

//capture mobile double tap: large ChangeRoom Icon
var tapedTwice = false;

function dbltapHandler(event) {
    if(!tapedTwice) {
        tapedTwice = true;
        setTimeout( function() { tapedTwice = false; }, 300 );
        return false;
    }
    event.preventDefault(); // prevent default mobile double tap zoomin on element.
    //action on double tap goes below
    console.log("double tap detected")
    changeRoomIconToggle();
 }

// Start Large & Small change Room Icon Status

function changeRoomIconOn (){
    console.log("on Change Room function");
    document.getElementById("changeRoomIcon").classList.remove("changeRoomIconOff");
    document.getElementById("changeRoomIcon").classList.add("changeRoomIconOn");
}

function changeRoomIconOff (){
    console.log("off Change Room function");
    document.getElementById("changeRoomIcon").classList.remove("changeRoomIconOn");
    document.getElementById("changeRoomIcon").classList.add("changeRoomIconOff");
        
    //show large change room icon and disappear
    document.getElementById('largeChangeRoomIcon').classList.remove('largeChangeRoomIconOn');
}

function  largeChangeRoomIconOn() {
    console.log('OnLarge Change Room icon"');
    //set status of small change room icon
    changeRoomIconOn();

    //show large change room icon and disappear
    document.getElementById('largeChangeRoomIcon').classList.add('largeChangeRoomIconOn');
}

let changeRoomIconStatus = false; //default status is off

function changeRoomIconToggle() {
    if (changeRoomIconStatus) { // true: added to change room
        // turn off
        console.log("turn off change room icon");
        changeRoomIconOff();
        changeRoomIconStatus = false;
    } else { //false: remove from change room
        // turn on
        console.log("turn on change room icon");
        changeRoomIconOn();
        largeChangeRoomIconOn();
        changeRoomIconStatus = true;
    }
}

// small change room icon event listen
document.getElementById("changeRoomIcon").addEventListener("click", changeRoomIconToggle);
// event listener over specific Carousel 
document.getElementById("carousel0").addEventListener("dblclick", changeRoomIconToggle);
// event listner over Moble device double tap.
document.getElementById("carousel0").addEventListener("touchstart", dbltapHandler);

// END change Room Icon Status