function talk(){
    var know = {
    "Hello" : "Hello, Akbot Here! ",
    "How Are You?" : "I'm all good",
    "What all can you do?" : "I can provide few solutions to your problem if it's in my capacity.",
    "I don't feel good." : "Medidate for a while or try taking deep breaths, that might help. ",
    "Ok" : "I hope I could help you. ",
    "Bye" : "Okay! I hope we meet again.",
    };

    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";

    if (user in know) {
           document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }
    
    else{
    document.getElementById('chatLog').innerHTML = "Sorry,I Didn't Understand <br>";
    }
}