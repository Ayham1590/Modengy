// Toggle burger menu
document.getElementById('burger').addEventListener('click', function () {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

function copyToClipboard() {
    const copyText = "0x...00000";
    navigator.clipboard.writeText(copyText).then(function () {
        alert("Copied the CA: " + copyText);
    });
}
