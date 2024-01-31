document.getElementById('exampleCheck1').addEventListener('change', function () {
    var signInButtonContainer = document.getElementById('signInButtonContainer');
    var signInButton = document.getElementById('signInButton');

    if (this.checked) {
        signInButtonContainer.style.display = 'block';
    } else {
        signInButtonContainer.style.display = 'none';
    }
});
document.getElementById('exampleInputEmail1').addEventListener('input', function () {
    var inputValue = this.value.toLowerCase();
    // Check if the input contains the word "mike"
    if (inputValue.includes('half measures')) {
        document.body.style.backgroundImage = 'url("../Images/Mike_Los_Pollos_Truck.png")';
    }

    else if (inputValue.includes('a cautious man')) {
        document.body.style.backgroundImage = 'url("../Images/a catious man 3.gif")';
    }
    else {
        // Reset to the original background image
        document.body.style.backgroundImage = 'url("../Images/242731706_629385025114450_882571064577353266_n.jpg")';
    }
});
