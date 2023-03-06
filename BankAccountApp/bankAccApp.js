window.onload = function(){
    document.getElementById("createAccount").onclick = Account.createAccount;
}

class Account{
    #accountName;
    #deposit;
    static accountInfoList = [];
    constructor(accountName, deposit){
        this.#accountName = accountName;
        this.#deposit = deposit;
    }
    static createAccount(){
        const accountName =document.getElementById('accountName').value;
        const deposit = document.getElementById('balance').value;
        if (accountName.trim() === "" || deposit.trim() === "") {
            return;
        }
        const instance = new Account(accountName,deposit);
        Account.accountInfoList.push(instance);
        Account.#fillTextarea();
    }

    static #fillTextarea(){
        var myString = "";
        for(var i=0 ; i<Account.accountInfoList.length;i++){
            myString += "Account name:  " + Account.accountInfoList[i].#accountName +
             "  Balance:  " + Account.accountInfoList[i].#deposit + "\n";
        }
        document.getElementById("myTextArea").value =  myString;
        document.getElementById('accountName').value = null;
        document.getElementById('balance').value = null;
    }
}

