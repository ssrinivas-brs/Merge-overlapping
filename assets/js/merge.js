function mergeIntervals() {
    const input = document.getElementById('intervalInput').value;
    const intervals = JSON.parse("[" + input + "]");
    
    if (!Array.isArray(intervals) || intervals.some(interval => !Array.isArray(interval) || interval.length !== 2)) {
        alert('Invalid input. Please enter intervals in the format [[start1, end1], [start2, end2], ...]');
        return;
    }

    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = intervals[i];
        const [lastStart, lastEnd] = merged[merged.length - 1];

        if (currentStart <= lastEnd) {
            merged[merged.length - 1] = [lastStart, Math.max(lastEnd, currentEnd)];
        } else {
            merged.push([currentStart, currentEnd]);
        }
    }

    displayResult(merged);
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h3>Merged Intervals:</h3>' + JSON.stringify(result);
}