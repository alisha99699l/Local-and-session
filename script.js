let key=prompt("Enter key you want to set")
let value=prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)
if(key == "red" || key == "blue"){
    localStorage.removeItem(key)

}


//Session Storage:
//If we have to close the browser and open the new tabs then we lost the data in session storage.
//All the methods of local storage are same in session storage.
// Storage Event: 
// When the data gets update in localstorage and sessionstorage event trigger with these property.


