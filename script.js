const letterMessage = "Gửi đến em, người con gái đã làm rực rỡ thêm những năm tháng sinh viên của anh. ✨\n\n" +
"Chúc mừng sinh nhật em! Anh vẫn luôn thầm cảm ơn định mệnh vì đã cho mình gặp nhau giữa biết bao người. Với anh, em không chỉ là người yêu, mà còn là người bạn đồng hành tuyệt vời nhất, người luôn kiên nhẫn và dịu dàng bên cạnh anh qua mọi vui buồn. ❤️\n\n" +
"Nhân ngày đặc biệt này, anh chẳng mong gì hơn ngoài việc được nhìn thấy nụ cười rạng rỡ của em mỗi ngày. Chúc cô gái của anh tuổi mới luôn bình an, hạnh phúc và sớm chạm tay đến những ước mơ mà em đang ấp ủ.\n\n" +
"Dù ngoài kia có bao nhiêu đổi thay, hãy nhớ rằng luôn có anh ở đây, sẵn sàng nắm chặt tay em đi qua mọi hành trình phía trước. ✨\n\n" +
"Yêu em thật nhiều! ❤️";

function startJourney() {
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
        document.body.style.overflow = 'auto'; // Cho phép cuộn
        document.getElementById("bg-music").play();
    }, 500);
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Tự động phát video mốc 3 khi nhìn thấy
window.addEventListener('scroll', () => {
    const video = document.getElementById('myVideo');
    const rect = video.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        video.play();
    } else {
        video.pause();
    }
});

function openLetter() {
    const modal = document.getElementById('letter-modal');
    modal.style.display = 'flex';
    confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
    
    let i = 0;
    const typingBox = document.getElementById("typing-text");
    typingBox.innerHTML = "";
    
    function type() {
        if (i < letterMessage.length) {
            typingBox.innerHTML += letterMessage.charAt(i);
            i++;
            setTimeout(type, 70); // Tốc độ gõ chữ lãng mạn
        }
    }
    type();
}

function closeLetter() {
    document.getElementById('letter-modal').style.display = 'none';
}

// Trái tim bay liên tục
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 500);