document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    if (!input) {
        alert("Please input a value");
        return;
    }

    const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

    const isPalindrome = cleanInput === cleanInput.split('').reverse().join('');

    resultElement.textContent = `"${input}" ${isPalindrome ? 'is' : 'is not'} a palindrome.`;
});