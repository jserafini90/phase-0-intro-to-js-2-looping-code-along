const names = ["Guadalupe", "Ollie", "Aki"];
const event = ["surprise"];

function writeCards(names, event) {
  let messages = []
  for (let i = 0; i < names.length; i++) {  
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
     
    }
return messages
}

function countDown(number){
    for(let count = 10; count >=0; count--)
    console.log(count);

}