function getNetSalary() {
    const basicSalary = prompt("What is your basic salary?");
    const benefits = prompt("What are your benefits");
  
    if (
      isNaN(basicSalary) ||
      isNaN(benefits) ||
      basicSalary < 0 ||
      benefits < 0
    ) {
      return "Invalid input. Please input a positive number.";
    }
  
    const grossSalary = basicSalary + benefits;
  
    const payee = calculatePayee(grossSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);
    const netSalary = grossSalary - payee - nssfDeductions - nhifDeductions;
  }
  
  function calculatePayee(grossSalary) {
    let tax = 0;
  
    if (grossSalary <= 24000) {
      tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
      tax = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
      tax = 4483.25 + (grossSalary - 32333) * 0.3;
    } else if (grossSalary <= 800000) {
      tax = 144783.35 + (grossSalary - 500000) * 0.325;
    } else {
      tax = 242283.35 + (grossSalary - 800000) * 0.35;
    }
  
    return tax;
  }
  
  function calculateNSSF(grossSalary) {
    const tierIRate = 0.06;
    const tierICap = 8000;
    const tierIICap = 72000;
  
    const tierIContribution = Math.min(grossSalary * tierIRate, tierICap);
  
    const tierIIContribution = Math.min(
      Math.max(grossSalary * tierIRate - tierICap, 0),
      tierIICap - tierICap
    );
  
    return tierIContribution + tierIIContribution;
  }
  
  function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
  }
  
  getNetSalary();