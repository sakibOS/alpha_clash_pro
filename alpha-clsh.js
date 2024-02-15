
//play first-->
function play(){
    const homeSection=removeElement('home-screen');
    const playGround=showElement('play-ground');
    const score=removeElement('final-score');
    //reset score & life-->
    setValue('life',5);
    setValue('score',0);
    const screenShowAlphabet=continueGame();
}

//remove section-->
function removeElement(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}
 //add section-->
function showElement(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden')
}

//continue the game-->
function continueGame(){
    //get random alphabet->
    const alphabet=getARandomAlphabet();
    //set random alphabet on screen->
    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;
    //add bg color->
    addBackgroundColor(alphabet);

}

//show letter-->
function getARandomAlphabet(){
    //create alphabet array->
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');
    //get a random index->
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
    const alphabet=alphabets[index];
    return alphabet;
}
//add background color-->
function addBackgroundColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

//capture keyboard key press-->
document.addEventListener('keyup',keyboardButtonPress)

//key board button press-->
function keyboardButtonPress(event){
    const playerPressed=event.key;
    //stop the game -->
    if(playerPressed=='Escape'){
        gameOver();
    }
    //get the expected key->
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText.toLowerCase();
    //right or wrong pres key->
    if(playerPressed===currentAlphabet){
        //update score->
        const currentScore=updateValue('score');
        const newScore=currentScore+1;
        setValue('score',newScore);

        //start a new round->
        removeBackgroundColor(currentAlphabet);
        continueGame();
    }
    else{
       const life=updateValue('life');
        const newLife=life-1;
        setValue('life',newLife);
        if(newLife===0){
            gameOver();
        }
    }
}

//set element value-->
function updateValue(elementId){
    const currentValue=document.getElementById(elementId);
    const currentText=currentValue.innerText;
    const value=parseInt(currentText);
    return value;
}
function setValue(elementId,value){
    const setElement=document.getElementById(elementId);
    setElement.innerText=value;
}

//final score-->
function gameOver(){
    removeElement('play-ground');
    showElement('final-score');
    const score=updateValue('score');
    setValue('game-score',score);
    const currentAlphabet=getElementText('current-alphabet');
    removeBackgroundColor(currentAlphabet);
}
//get element text-->
function getElementText(elementId){
    const element=document.getElementById(elementId);
    const elementText=element.innerText;
    return elementText;
}
//remove background color-->
function removeBackgroundColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


