// Get elements
const desLength = document.getElementById('desLength');
const len = document.getElementById('length');
const pr = document.getElementById('price');

document.getElementById('submit').addEventListener('click', () => {
    try {
        // Convert input values to numbers
        const dLength = Number(desLength.value);
        const length = Number(len.value);
        const price = Number(pr.value);

        // Validate required inputs
        if (
            isNaN(dLength) || isNaN(length) ||
            dLength <= 0 || length <= 0
        ) {
            throw new Error("Please enter valid numbers in all fields.");
        }

        // Calculate yarn balls needed
        let yarnBalls = dLength / length;
        yarnBalls = Math.round(yarnBalls * 2) / 2;

        // Start building result HTML
        let resultHTML = `
            <p>You will need approximately <strong>${yarnBalls}</strong> skeins of yarn!</p> <br>
            <p>Estimated cost: $<strong>${cost.toFixed(2)}</strong></p> <br>
            <button onclick="location.reload()">Try Again</button>
        `;
        document.getElementById("container").innerHTML = resultHTML;


        // Only show full price if price was entered and valid
        if (!isNaN(price) && pr.value.trim() !== "") {
            const fullPrice = price * Math.round(yarnBalls);
            resultHTML += `<p>The full price is <strong>${fullPrice.toFixed(2)}€</strong>.</p>`;
        }

        resultHTML += `<button onclick="location.href='index.html'">Go back</button></div>`;

        // Output result
        document.body.innerHTML = resultHTML;

    } catch (error) {
        alert(error.message);
        window.location.href = "https://launicafisura13.github.io/yarncalc";
    }
});
