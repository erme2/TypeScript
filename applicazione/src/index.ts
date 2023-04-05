function calculateTax5(income: number)
{
    if (income < 50_000)
        return 0;
}
function calculateTax6(income: number, incomeYear = 2022): number
{
    let taxesPerc: number;

    if (incomeYear > 2000) {
        taxesPerc = 0.2;
    } else {
        taxesPerc = 0.4;
    }
    if (income < 50_000)
        return 0;

    return income * taxesPerc;
}
