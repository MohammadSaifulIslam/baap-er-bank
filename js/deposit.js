// step-1 add event listener in the button
document.getElementById('deposit-btn').addEventListener('click', function(){
    // step-2 get the deposit amount from input
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountValueString = depositAmount.value;
    const depositAmountValue = parseFloat(depositAmountValueString);
    

    // step-3 get the current deposit total
    const currentDeposit = document.getElementById('current-deposit');
    const currentDepositAmountString = currentDeposit.innerText;
    const currentDepositAmount = parseFloat(currentDepositAmountString);

    //step-4 update the  deposite total
    currentDeposit.innerText = currentDepositAmount + depositAmountValue;

    // step-5 get the balance amount 
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountValueString = balanceAmount.innerText;
    const balanceAmountValue = parseFloat(balanceAmountValueString);

    // step-6 update the total balance amount
    balanceAmount.innerText = balanceAmountValue + depositAmountValue;


    // step-7 remove the value in the input field
    depositAmount.value = '';
    
})