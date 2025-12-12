
function bmiCalculate() {
    // Get values
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML =
            '<p class="error">Please enter valid weight and height!</p>';
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Format BMI to 1 decimal place
    const bmiFormatted = bmi.toFixed(1);

    // Determine category
    let category = "";
    let color = "";

    if (bmi < 18.5) {
        category = "Underweight 🍕";
        color = "blue";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight 🏆";
        color = "green";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight 🏋️‍♂️";
        color = "orange";
    } else {
        category = "Obese 🩺";
        color = "red";
    }

    // Display result
    document.getElementById("result").innerHTML = `
        <h2>Your BMI: <span style="color: ${color}">${bmiFormatted}</span></h2>
        <p>Category: <strong>${category}</strong></p>
        <p>Weight: ${weight} kg | Height: ${height} cm</p>
    `;

    // Optional: Console log
    console.log(`BMI: ${bmiFormatted}, Category: ${category}`);
}





// function bmiCalculate(){
//     const weight =  document.getElementById("weight").value
//     const height =  document.getElementById("height").value

//     const heightInMeters = height / 100;

//     const bmi = weight / (heightInMeters * heightInMeters);

//     console.log(bmi);

//     let result = ""
//     if (bmi < 18) {
//         result = "you are under weight"
//     } else if (bmi > 18 && bmi <= 25) {
//         result = "you are normal weight 👍"
//     }else if(bmi > 25 && bmi <= 30){
//         result = "you are normal weight, optionally lose weight"
//     }else if(bmi > 30 && bmi <= 35){
//         result = "you are over weight"
//     }else{
//         result = "you are extremely over weight 😂"
//     }

//     document.getElementById("result").innerText = result

// }

