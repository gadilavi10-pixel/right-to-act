
document.querySelectorAll('.tab').forEach(b=>{
 b.onclick=()=>{
 document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
 document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));
 b.classList.add('active');
 document.getElementById(b.dataset.tab).classList.add('active');
 }
});
const cases={
supplier:'IAM=ALLOW | Fraud=ALLOW | DECIMAG=ESCALATE (Missing Structural Continuity)',
bit:'User thinks Receive Money. System sees Send Money. DECIMAG=REQUEST_INFO',
agent:'Permission Exists. Action Irreversible. DECIMAG=ESCALATE/DENY'
};
function showCase(c){document.getElementById('casebox').innerHTML=cases[c];}
showCase('supplier');
