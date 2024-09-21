document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // console.log('added cash out')

        const cashOut = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cash-out-pin');
        // console.log(cashOut, pinNumber);

        if(isNaN(cashOut)){
            alert('failed to procese');
            return;
        }

        if (pinNumber === 1234) {
            // console.log('added')
            const balance = getTextValueById('account-balance');
            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;

            //transaction section
            const div = document.createElement('div')
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
                <h2 clss="text-3xl font-bold">Cash Out</h2>
                <p> ${cashOut} Withdraw. New Balance ${newBalance} </p>
            `
            // console.log(div);
            document.getElementById('transaction-container').appendChild(div);

            // const h1 = document.getElementById('h1')
            // h1.classList.add('bg-blue-500')
            // h1.innerText = `Cash Out: ${cashOut} withdraw, New Balance: ${newBalance}`
            // document.getElementById('transaction-container').appendChild(h1);

        }
        else {
            alert('Access denied');
        }
    })