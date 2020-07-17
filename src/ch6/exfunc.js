function printOwing(invoice) {

  printBanner();
  // 미해결 채무(outstanding)를 계산한다.
  let outstanding = calcOutstanding(invoice); //함수추출완료 함수 return 값을 원래변수에 저장
  recordDueDate(invoice);
  // 세부 사항을 출력한다.
  printDetail(invoice, outstanding);                   

}

function calcOutstanding(invocie) {
  let outstanding = 0;
  for (const o of invocie.orders) {
    outstanding += o.amount;
  }
  return outstanding;
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