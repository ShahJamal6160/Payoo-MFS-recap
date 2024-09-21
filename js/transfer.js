document.getElementById('btn-transfer')
    .addEventListener('click', function(event){
        event.preventDefault();
        // console.log("clicked")

        const inputTransfer = getInputFieldValueById('input-transfer');
        const inputAmount = getInputFieldValueById('input-amount');
        const pinNumber  =  getInputFieldValueById('input-transfer-pin');
        console.log(inputTransfer, inputAmount, pinNumber);

        if(pinNumber === 1234 && inputTransfer === 100){
            // console.log('your are valid')
            const balance = getTextValueById('account-balance');
            const newBalance = balance - inputAmount;
            document.getElementById('account-balance').innerText = newBalance;

            const p = document.createElement('p')
            p.classList.add('bg-red-500')
            p.innerText = `${cashOut} Withdraw. New Balance ${newBalance}`

            document.getElementById('transaction-container').appendChild(p);
        }
        else{
            alert("field transfer");
        }
    })