// Scroll to top button functionality
document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// BMI Calculator functionality (for bmicalculator.html page)
document.getElementById('calculateBtn')?.addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
    const bmi = (weight / (height * height)).toFixed(2);

    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi} (${category})`;
});