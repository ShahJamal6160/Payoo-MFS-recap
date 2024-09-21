document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        // console.log('added cash out')

        const cashOut = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cash-out-pin');
        // console.log(cashOut, pinNumber);

        if(pinNumber === 1234){
            // console.log('added')
            const balance = getTextValueById('account-balance');
            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Access denied');
        }
    })