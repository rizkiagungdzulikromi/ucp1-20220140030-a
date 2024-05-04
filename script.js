// Fungsi untuk mendapatkan waktu sekarang
function getCurrentTime() {
    return new Date().toLocaleTimeString('en-US', { hour12: false });
}

// Fungsi untuk mengambil salam berdasarkan waktu
function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
        return "Good Morning";
    } else if (currentHour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

// Memperbarui waktu dan salam setiap detik
function updateDateTime() {
    const greetingElement = document.getElementById('greeting');
    const datetimeElement = document.getElementById('datetime');

    greetingElement.textContent = getGreeting();
    datetimeElement.textContent = new Date().toLocaleString();

    setTimeout(updateDateTime, 1000);
}

// Panggil fungsi untuk pertama kali memperbarui waktu
updateDateTime();
