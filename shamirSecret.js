const fs = require('fs');
const data = JSON.parse(fs.readFileSync('input.json', 'utf8'));
const n = data.keys.n;
const k = data.keys.k;
let points = [];
for (let i = 1; i <= n; i++) {
    const base = parseInt(data[i.toString()].base);
    const value = data[i.toString()].value;
    const x = i;
    const y = parseInt(value, base);
    points.push({ x, y });
}
let selectedPoints = points.slice(0, k);
function lagrangeInterpolation(points, x) {
    let result = 0;
    const n = points.length;
    for (let i = 0; i < n; i++) {
        let term = points[i].y;
        for (let j = 0; j < n; j++) {
            if (j !== i) {
                term *= (x - points[j].x) / (points[i].x - points[j].x);
            }
        }
        result += term;
    }
    return result;
}

const c = lagrangeInterpolation(selectedPoints, 0);

console.log('Constant term c:', c);
