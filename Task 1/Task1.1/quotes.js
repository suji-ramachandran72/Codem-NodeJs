const quotes=["Success is not final,failure is not fatel","Belive you can and you're halfway there.","Do something today that your future self will thank you for.","dream big and dare to fail.","Hard work beats talent when talent doens't work hard"];
function getRandomQuote(){
    const randomNum=Math.floor(Math.random()*quotes.length);
    return quotes[randomNum];
}
module.exports=getRandomQuote;