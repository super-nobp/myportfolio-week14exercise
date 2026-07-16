function predictSAT() {
    // 1. Check for empty inputs before calculating (Practice 5 logic)
    if (!document.querySelector("#rw1").value || !document.querySelector("#rw2").value) {
        alert("Please fill in both Reading & Writing modules!");
        return;
    }
    if (!document.querySelector("#m1").value || !document.querySelector("#m2").value) {
        alert("Please fill in both Math modules!");
        return;
    }

    // 2. Convert input strings to numbers (Practice 4 logic)
    var rw1 = Number(document.querySelector("#rw1").value);
    var rw2 = Number(document.querySelector("#rw2").value);
    var m1 = Number(document.querySelector("#m1").value);
    var m2 = Number(document.querySelector("#m2").value);
    var res = document.querySelector("#result");

    // 3. Validate correct range (0 to 22 questions per module)
    if (rw1 < 0 || rw1 > 22 || rw2 < 0 || rw2 > 22 || m1 < 0 || m1 > 22 || m2 < 0 || m2 > 22) {
        res.style.color = "red";
        res.innerHTML = "Error: Module scores must be between 0 and 22.";
        return;
    }

    // 4. Calculate score (scaling total correct answers out of 44 to a 200-800 scale)
    var totalRW = rw1 + rw2;
    var totalMath = m1 + m2;

    var predictedRW = Math.round(200 + (totalRW / 44) * 600);
    var predictedMath = Math.round(200 + (totalMath / 44) * 600);
    var totalScore = predictedRW + predictedMath;

    // 5. Display results dynamically inside the DOM element
    res.style.color = "#800000";
    res.innerHTML = "Estimated RW: " + predictedRW + "<br>" +
                    "Estimated Math: " + predictedMath + "<br>" +
                    "Total SAT Score: " + totalScore + " / 1600";
}
