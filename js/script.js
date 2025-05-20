document.getElementById('funny-button').onclick = function() {
    const blessingBox = document.getElementById('blessing-box');
    blessingBox.innerHTML = `
        <img src="assets/bkash.png" alt="bKash Logo" class="bkash-logo" style="height:32px;vertical-align:middle;margin-right:10px;">
        <span>May your love be as endless as bKash offers! (But don't worry, we only accept blessings, not payments! 😄)</span>
    `;
    blessingBox.classList.add('show-blessing');
};