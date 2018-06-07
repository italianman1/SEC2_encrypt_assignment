var secret = "SEC2isawesome"
var messages = {};
var users = {};



function encryptMessage(){
    var newUser = true;

    for (var key in users) {
        if(key.toLowerCase() === document.getElementById('name').value.toLowerCase() && users[key] === document.getElementById('password').value){
            newUser = false;
        }
    }

    if(!newUser){
        var message_to_decrypt = messages[document.getElementById('name').value];
        console.log(message_to_decrypt);
        document.getElementById('encrypted_text').value = CryptoJS.AES.decrypt(message_to_decrypt, secret).toString(CryptoJS.enc.Utf8);
    }

    if(newUser){
        var userExists = false;

        for (var key in users) {
            if(key.toLowerCase() === document.getElementById('name').value.toLowerCase()){
                alert("There is already someone with this name");
            }
        }

        if(!userExists){
            var encrypted_message = "";
            users[document.getElementById('name').value] = document.getElementById('password').value;
            var message_to_encrypt = document.getElementById('encrypted_text').value;
            encrypted_message = CryptoJS.AES.encrypt(message_to_encrypt, secret);
            messages[document.getElementById('name').value] = encrypted_message;
        }

    }

    console.log(messages);
    console.log(users);
}