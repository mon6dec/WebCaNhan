// Lấy tất cả các thẻ <a> trong phần nav
const links = document.querySelectorAll('nav a');

// Thêm sự kiện click vào mỗi liên kết
links.forEach(link => {
    link.addEventListener('click', function(e) {
        // Xóa lớp 'active' khỏi tất cả các thẻ <a>
        links.forEach(link => link.classList.remove('active'));

        // Thêm lớp 'active' cho thẻ vừa được click
        e.target.classList.add('active');
    });
});
// Lấy tất cả các liên kết trong menu và tất cả các phần trên trang
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

// Hàm để kiểm tra vị trí cuộn và cập nhật lớp active cho menu
function setActiveSection() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

// Thêm sự kiện lắng nghe khi cuộn trang
window.addEventListener('scroll', setActiveSection);
