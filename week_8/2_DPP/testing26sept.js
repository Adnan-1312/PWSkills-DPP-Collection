let username = "Anish"; 
try{
    if(username.length==3){
        console.log(username);
    }
    
}catch{
    if (username.length == 5){
         throw new ReferenceError("iam refernce error")
    }

}