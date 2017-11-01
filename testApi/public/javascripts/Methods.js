function GenerateToken(){
    let secretWord = document.getElementById('password').value;
    let content = document.getElementById('jsonContent').value;
    document.location.href = "/token/"+ secretWord +"&" + content;
   
 }