document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        // console.log("add money")

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number')
        // console.log(addMoney, pinNumber);

        if(isNaN(addMoney)){
            alert('failed to procese');
            return;
        }

        if(pinNumber === 1234){
            const balance = getTextValueById('account-balance');
            // console.log(balance, addMoney);
            const newBalance = balance + addMoney;
            document.getElementById('account-balance').innerText = newBalance;

            // transaction section
            const p = document.createElement('p')
            p.classList.add('bg-blue-500')
            p.innerText = `add-money: ${addMoney} tk. balance: ${newBalance}`
            // console.log(p)
            document.getElementById('transaction-container').appendChild(p);

           
        }
        else{
            alert('wrong phone & pin Number')
        }
    })