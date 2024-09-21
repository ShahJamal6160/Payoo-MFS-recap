// document.getElementById('btn-login')
//     .addEventListener('click', function(event){
//         event.preventDefault();
//         // console.log('login form clicked')

//     const phoneNumber = getInputFieldValueById('input-phone-number');
//     // console.log(phoneNumber);
//     const pinNumber = getInputFieldValueById('input-pin-number');
//     // console.log(pinNumber);

//     if(phoneNumber === "5" && pinNumber === "1234"){
//         console.log('You are login')
//         window.location.href = '/home.html';
//     }
//     else{
//         alert('Wrong phone number or pin')
//     }
// })

document.getElementById('btn-login')
    .addEventListener('click',function(event){
        event.preventDefault();

        const phoneNumber = document.getElementById('input-phone-number').value;
        const pinNumber = document.getElementById('input-pin-number').value;
        // console.log(phoneNumber, pinNumber);
        if(phoneNumber === "10" && pinNumber === "1234"){
            console.log("your are login")
            window.location.href = '/home.html';
        }
        else{
            AudioListener("Wrong Phone & pin Number")
        }
    })