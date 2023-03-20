// KRA tax rates for 2023
const TAX_RATES = {
    up_to_24000: 0.1,
    above_24000_to_40000: 0.15,
    above_40000_to_60000: 0.2,
    above_60000_to_80000: 0.25,
    above_80000_to_180000: 0.3,
    above_180000: 0.35,
};

// NHIF and NSSF rates for 2023
const NHIF_RATE = 0.015;
const NSSF_RATE = 0.06;

// Get input from the user
const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefits: "));

// Calculate gross salary
const grossSalary = basicSalary + benefits;

// Calculate tax (payee)
let tax = 0;
if (grossSalary <= 24000) {
    tax = 0;
} else if (grossSalary <= 40000) {
    tax = (grossSalary - 24000) * TAX_RATES.up_to_24000;
} else if (grossSalary <= 60000) {
    tax =
        (grossSalary - 40000) * TAX_RATES.above_24000_to_40000 +
        (40000 - 24000) * TAX_RATES.up_to_24000;
} else if (grossSalary <= 80000) {
    tax =
        (grossSalary - 60000) * TAX_RATES.above_40000_to_60000 +
        (60000 - 40000) * TAX_RATES.above_24000_to_40000 +
        (40000 - 24000) * TAX_RATES.up_to_24000;
} else if (grossSalary <= 180000) {
    tax =
        (grossSalary - 80000) * TAX_RATES.above_60000_to_80000 +
        (80000 - 60000) * TAX_RATES.above_40000_to_60000 +
        (60000 - 40000) * TAX_RATES.above_24000_to_40000 +
        (40000 - 24000) * TAX_RATES.up_to_24000;
} else {
    tax =
        (grossSalary - 180000) * TAX_RATES.above_180000 +
        (180000 - 80000) * TAX_RATES.above_60000_to_80000 +
        (80000 - 60000) * TAX_RATES.above_40000_to_60000 +
        (60000 - 40000) * TAX_RATES.above_24000_to_40000 +
        (40000 - 24000) * TAX_RATES.up_to_24000;
}

// Calculate NHIF and NSSF deductions
const nhifDeduction = grossSalary * NHIF_RATE;
const nssfDeduction = grossSalary * NSSF_RATE;

// Calculate net salary
const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

// Print the results
console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
console.log(`Tax (PAYE): ${tax.toFixed(2)}`);
console.log(`NHIF Deduction: ${nhifDeduction.toFixed(2)}`);
console.log(`NSSF Deduction: ${nssfDeduction.toFixed(2)}`);
console.log(`Net Salary: ${netSalary.toFixed(2)}`);


/*const basicSalary = 80000;
const mortgage = true;
const lifeInsurance = false;
const homeOwnershipSavingsPlan = true;
const disabilityExemption = false;

// Tax rates and parameters for 2023
const taxRates = [
  { lowerLimit: 0, upperLimit: 24000, rate: 0.1 },
  { lowerLimit: 24001, upperLimit: 32333, rate: 0.25 },
  { lowerLimit: 32334, upperLimit: Infinity, rate: 0.3 },
];

const personalReliefMonthly = 2400;
const insuranceReliefMonthly = 5000;
const pensionFundContributionMonthly = 20000;
const hospContributionMonthly = 0;
const affordableHousingReliefMonthly = 9000;
const ownerOccupierInterestMonthly = 25000;
const disabilityExemptionAnnual = 150000;

// NHIF rates in effect from 1 April 2015
const nhifRates = [
  { lowerLimit: 0, upperLimit: 5999, deduction: 150 },
  { lowerLimit: 6000, upperLimit: 7999, deduction: 300 },
  { lowerLimit: 8000, upperLimit: 11999, deduction: 400 },
  { lowerLimit: 12000, upperLimit: 14999, deduction: 500 },
  { lowerLimit: 15000, upperLimit: 19999, deduction: 600 },
  { lowerLimit: 20000, upperLimit: 24999, deduction: 750 },
  { lowerLimit: 25000, upperLimit: 29999, deduction: 850 },
  { lowerLimit: 30000, upperLimit: 34999, deduction: 900 },
  { lowerLimit: 35000, upperLimit: 39999, deduction: 950 },
  { lowerLimit: 40000, upperLimit: 44999, deduction: 1000 },
  { lowerLimit: 45000, upperLimit: 49999, deduction: 1100 },
  { lowerLimit: 50000, upperLimit: 59999, deduction: 1200 },
  { lowerLimit: 60000, upperLimit: 69999, deduction: 1300 },
  { lowerLimit: 70000, upperLimit: 79999, deduction: 1400 },
  { lowerLimit: 80000, upperLimit: 89999, deduction: 1500 },
  { lowerLimit: 90000, upperLimit: 99999, deduction: 1600 },
  { lowerLimit: 100000, upperLimit: Infinity, deduction: 1700 },
];

// NSSF rates under new NSSF Act
const nssfTier1Rate = 0.06;
const nssfTier2Rate = 0.06;
const nssfTier1Limit = 6000;
const nssfTier2Limit = 18000;

// Calculate gross salary
const grossSalary = basicSalary;

// Calculate taxable income
let taxableIncome = grossSalary;
if (disabilityExemption) {
  taxableIncome -= disabilityExemptionAnnual / 12;
}
if (mortgage) {
  taxableIncome -= ownerOccupierInterestMonthly;
}
if (lifeInsurance) {
  taxableIncome -= insuranceReliefMonthly;
}
if (homeOwnershipSavingsPlan) {
  taxableIncome -= affordableHousingReliefMonthly;
}

// Calculate PAYE
let payee = 0;
let taxable
*/

  