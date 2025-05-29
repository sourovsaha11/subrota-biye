document.getElementById('funny-button').onclick = function() {
    const blessingBox = document.getElementById('blessing-box');
    blessingBox.innerHTML = `
        <img src="assets/bkash.png" alt="bKash Logo" class="bkash-logo" style="height:32px;vertical-align:middle;margin-right:10px;">
        <span> বিকাশের প্রয়োজন নেই, আপনাদের উপস্থিতি এবং আশীর্বাদ একান্ত কাম্য ❤️</span>
    `;
    blessingBox.classList.add('show-blessing');
};


// count_downstarts here 
// ...existing code...

// Countdown Timer
// function updateCountdown() {
//     const eventDate = new Date('2025-06-12T00:00:00');
//     const now = new Date();
//     const diff = eventDate - now;

//     if (diff <= 0) {
//         document.getElementById('countdown').innerHTML = "It's Wedding Day! 🎉";
//         return;
//     }

//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((diff / (1000 * 60)) % 60);

//     document.getElementById('days').textContent = days.toString().padStart(2, '0');
//     document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
//     document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
// }

// setInterval(updateCountdown, 1000);
// updateCountdown();