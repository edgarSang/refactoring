function printOwing(invoice) {

  printBanner();
  
  // 미해결 채무(outstanding)를 계산한다.
  let outstanding = 0; // <- 선언문을 사용되는 위치위로변경 (sliding)
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);

  // 세부 사항을 출력한다.
  printDetail(invoice, outstanding);                   
}

function recordDueDate(invoice){
  const today = Clock.today;
  invoice.dueDate = new(today.getFullYear(), today.getMonth(),
                        today.getDate() + 30);
}

function printBanner() {
  console.log("***********");
  console.log("***고객 채무***");
  console.log("***********");
}

function printDetail(invocie, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invocie.dueDate.toLocaleDateString()}`);
}