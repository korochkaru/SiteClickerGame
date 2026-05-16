balanceEl = document.getElementById("Balance");
upgradesEl = document.getElementById("Upgrades");

let clicked = 0;
let balance = 0;
let upgrades = 1;

balanceEl.textContent = balance;
upgradesEl.textContent = upgrades;

function coin(){
    clicked++;
    balance+=upgrades;
    if (clicked % 100 === 0){addUpg();}
    if (balance>=10000){balance=0; clicked=0; upgrades=0;}
    balanceEl.textContent = balance;
    upgradesEl.textContent = upgrades;
}

function upgrading(){
    upgrades+=1;
    upgradesEl.textContent = upgrades;
}

function addUpg(){
    if (!document.querySelector('.upg')) {
        upg = document.createElement('button');
        upg.textContent = "Улучшение";
        upg.className = "upg";
        upg.onclick = function() {
            upg.remove();
            upgrades+=1;
            upgradesEl.textContent = upgrades;
        };
        document.body.appendChild(upg);
    }
}