document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        // console.log("add money")

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number')
        // console.log(addMoney, pinNumber);

        if(pinNumber === 1234){
            const balance = getTextValueById('account-balance');
            // console.log(balance, addMoney);
            const newBalance = balance + addMoney;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('wrong phone & pin Number')
        }
    })