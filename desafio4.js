const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalFaturamento = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);

const percentuais = Object.keys(faturamento).reduce((acc, estado) => {
    acc[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2) + '%';
    return acc;
}, {});

console.log("Percentuais de representação por estado:");
Object.entries(percentuais).forEach(([estado, percentual]) => {
    console.log(`${estado}: ${percentual}`);
});
