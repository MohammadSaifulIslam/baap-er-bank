// step-1
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step-2
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountValueString = withdrawAmount.value;
    const withdrawAmountValue = parseFloat(withdrawAmountValueString);

    // step-7
    withdrawAmount.value = "";

    // step-3
    const cureentWithdraw = document.getElementById('cureent-withdraw');
    const cureentWithdrawValueString = cureentWithdraw.innerText;
    const cureentWithdrawTotal = parseFloat(cureentWithdrawValueString);

   

    // step-5
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountValueString = balanceAmount.innerText;
    const balanceAmountValue = parseFloat(balanceAmountValueString);
    if(withdrawAmountValue > balanceAmountValue){
        alert("baap er bank e eto tk nai")
        return;
    }


     // step-4
     const updateCureentWithdrawTotal = cureentWithdrawTotal + withdrawAmountValue;
     cureentWithdraw.innerText = updateCureentWithdrawTotal;

    // step-6
    const updateBalanceAmount = balanceAmountValue - withdrawAmountValue;
    balanceAmount.innerText = updateBalanceAmount;

 
})