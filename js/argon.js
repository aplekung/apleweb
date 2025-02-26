document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".download-btn").addEventListener("click", function() {
        Swal.fire({
            title: "ยืนยันการดาวน์โหลด",
            text: "คุณต้องการไปยังหน้าดาวน์โหลดหรือไม่?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ใช่, ไปเลย!",
            cancelButtonText: "ยกเลิก"
        }).then((result) => {
            if (result.isConfirmed) {
                window.open('https://getargon.xyz/', '_blank');
            }
        });
    });
    document.querySelector(".Fix-btn").addEventListener("click", function() {
        Swal.fire({
            title: "ยืนยันการดาวน์โหลด",
            text: "คุณต้องการไปยังหน้าดาวน์โหลดหรือไม่?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ใช่, ไปเลย!",
            cancelButtonText: "ยกเลิก"
        }).then((result) => {
            if (result.isConfirmed) {
                window.open('argonfix.html', '_blank');
            }
        });
    });
});
