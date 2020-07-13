import invoice from './invoice.json';
import plays from './plays.json';

let rtn = statement(invoice[0]);
console.log(rtn);

function statement(invoice) {
  let totalAmout = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;
  const format = new Intl.NumberFormat("en-US", {style:"currency", currency: "USD", minimumFractionDigits: 2}).format;
  for (let perf of invoice.performances) {
    volumeCredits == volumeCreditsFor(perf);

    result += ` ${playFor(perf).name}: ${format(amountFor(perf, playFor(perf))/100)} (${perf.audience}석)\n`;
    totalAmout += amountFor(perf, playFor(perf));
  }

  result += `총액: ${format(totalAmout/100)}\n`;
  result += `적립 포인트 : ${volumeCredits}점 \n`;
  return result;
}

function volumeCreditsFor(aPerformance) {
  let volumeCredits = 0;
  volumeCredits += Math.max(aPerformance.audience - 30, 0);

  if("comedy" === playFor(aPerformance).type) 
    volumeCredits += Math.floor(aPerformance.audience / 5);

  return volumeCredits;
}

function amountFor(aPerformance) {
  let result = 0;
  switch (playFor(aPerformance).type) {
    case "tragedy":
      result = 40000;
      if(aPerformance.audience > 30) {
        result += 10000 *(aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 30000;
      if(aPerformance.audience > 20) {
        result += 10000 + 500 *(aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르 ${playFor(aPerformance).type}`);
  }

  return result;
}

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}