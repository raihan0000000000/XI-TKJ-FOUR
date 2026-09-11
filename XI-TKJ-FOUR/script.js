/* ========================================
   XI TKJ FOUR - SCRIPT.JS
======================================== */


/* ========================================
   1. DATA 33 ANGGOTA KELAS
======================================== */

const members = [

    {
        name: "Muh.yahzil aditya",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Muh.yazin ibrahim",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Muh.adil fitrah",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Muh.masriadi",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Muhammad akbar",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Musfirah",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Nur fadillah",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Nur fajriani yusuf",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Nur husnul khotima j.tadu",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Nurul dwi shafira",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Nurul hikmah",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Nurul nabila",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Nurul resky aulia",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Putri dian pratiwi",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Putri regina",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Raihan pratama azkira",
        instagram: "@r41h4n_38",
        tiktok: "@r41h4n_38",
        quote: "impian tanpa reaksi hanya ilusinasi"
    },

    {
        name: "Rasya apliria wijaya",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Rena mastan",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Rusdi",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Safira fahriani",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Sahara napila",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Salma",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Saskia adiameka",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Suci rahmadani",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Sureugina",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Suriani",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Syawal jumadil",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Tanterama riski fauzi",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Tifatul hidayat",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Yuda",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Zahra awliya muhardi",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Zhuriani",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    },

    {
        name: "Kristian sampe pato",
        instagram: "@tidak diketahui",
        tiktok: "@tidak diketahui",
        quote: "...."
    }

];


/* ========================================
   2. MEMBUAT KARTU ANGGOTA
======================================== */

function displayMembers(list) {

    const memberGrid =
        document.getElementById("memberGrid");

    if (!memberGrid) {
        return;
    }

    memberGrid.innerHTML = "";

    list.forEach(function(member) {

        const card =
            document.createElement("div");

        card.className = "member-card";

        let photo = "assets/placeholder.svg";

        if (member.name === "Raihan pratama azkira") {
            photo = "assets/anggota/Raihan.jpeg";
        }

        if (member.name === "Syawal jumadil") {
            photo = "assets/anggota/Syawal.jpeg";
        }

        if (member.name === "Tanterama riski fauzi") {
            photo = "assets/anggota/Tanterama.jpeg";
        }

        if (member.name === "Tifatul hidayat") {
            photo = "assets/anggota/Tifatul.jpeg";
        }

        card.innerHTML = `
            <img
                src="${photo}"
                alt="Foto ${member.name}"
            >

            <h3>${member.name}</h3>

            <p class="social">
                Instagram: ${member.instagram}
            </p>

            <p class="social">
                TikTok: ${member.tiktok}
            </p>

            <p class="member-quote">
                "${member.quote}"
            </p>
        `;

        memberGrid.appendChild(card);
    });
}


/* ========================================
   3. PENCARIAN ANGGOTA
======================================== */

function setupMemberSearch() {

    const searchInput =
        document.getElementById("searchMember");

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener(
        "input",
        function() {

            const keyword =
                this.value.toLowerCase().trim();

            const filteredMembers =
                members.filter(function(member) {

                    return member.name
                        .toLowerCase()
                        .includes(keyword);

                });

            displayMembers(filteredMembers);

        }
    );
}


/* ========================================
   4. LOGIN ADMIN
======================================== */

function loginAdmin() {

    const username =
        document.getElementById("adminUsername")?.value.trim();

    const password =
        document.getElementById("adminPassword")?.value;

    const ADMIN_USERNAME = "admin";
    const ADMIN_PASSWORD = "TKJFOUR2026";

    if (
        username === ADMIN_USERNAME &&
        password === ADMIN_PASSWORD
    ) {

        const dashboard =
            document.getElementById("adminDashboard");

        if (dashboard) {
            dashboard.style.display = "block";
        }

        alert(
            "Login berhasil!\n" +
            "Selamat datang, Admin XI TKJ FOUR."
        );

    } else {

        alert(
            "Username atau password salah."
        );

    }
}


/* ========================================
   5. JADWAL PELAJARAN
======================================== */

const schedule = {

    "Senin": [
        ["07.15–08.00", "—", ""],
        ["08.00–08.45", "Konsentrasi Keahlian TKJ (Teknologi Jaringan Kabel)", "Sunarni Landang, S.Kom"],
        ["08.45–09.30", "Konsentrasi Keahlian TKJ (Teknologi Jaringan Kabel)", "Sunarni Landang, S.Kom"],
        ["09.45–10.30", "Konsentrasi Keahlian TKJ (Teknologi Jaringan Kabel)", "Sunarni Landang, S.Kom"],
        ["10.30–11.15", "Pendidikan Jasmani, Olah Raga & Kesehatan", "Usman, S.Pd."],
        ["11.15–12.00", "Pendidikan Jasmani, Olah Raga & Kesehatan", "Usman, S.Pd."],
        ["13.00–13.45", "Konsentrasi Keahlian TKJ (Keamanan Jaringan)", "Hj. Suharti, S.Kom., M.Pd"],
        ["13.45–14.30", "Konsentrasi Keahlian TKJ (Keamanan Jaringan)", "Hj. Suharti, S.Kom., M.Pd"],
        ["14.30–15.15", "Konsentrasi Keahlian TKJ (Keamanan Jaringan)", "Hj. Suharti, S.Kom., M.Pd"],
        ["15.15–16.00", "Konsentrasi Keahlian TKJ (Keamanan Jaringan)", "Hj. Suharti, S.Kom., M.Pd"]
    ],

    "Selasa": [
        ["07.15–08.00", "Pendidikan Agama dan Budi Pekerti", "Sukriani, S.Pd.I"],
        ["08.00–08.45", "Pendidikan Agama dan Budi Pekerti", "Sukriani, S.Pd.I"],
        ["08.45–09.30", "Pendidikan Agama dan Budi Pekerti", "Sukriani, S.Pd.I"],
        ["09.45–10.30", "Matematika", "Mu'Usnadha, S.Pd., M.Pd"],
        ["10.30–11.15", "Matematika", "Mu'Usnadha, S.Pd., M.Pd"],
        ["11.15–12.00", "Matematika", "Mu'Usnadha, S.Pd., M.Pd"],
        ["13.00–13.45", "MPP (TIK Coding dan AI)", "Muh. Rizal Samad, S.Pd., M.Pd"],
        ["13.45–14.30", "MPP (TIK Coding dan AI)", "Muh. Rizal Samad, S.Pd., M.Pd"],
        ["14.30–15.15", "MPP (TIK Coding dan AI)", "Muh. Rizal Samad, S.Pd., M.Pd"],
        ["15.15–16.00", "MPP (TIK Coding dan AI)", "Muh. Rizal Samad, S.Pd., M.Pd"]
    ],

    "Rabu": [
        ["07.15–08.00", "Kreativitas, Inovasi dan Kewirausahaan", "Muh. Rizal Samad, S.Pd., M.Pd"],
        ["08.00–08.45", "Kreativitas, Inovasi dan Kewirausahaan", "Muh. Rizal Samad, S.Pd., M.Pd"],
        ["08.45–09.30", "Kreativitas, Inovasi dan Kewirausahaan", "Muh. Rizal Samad, S.Pd., M.Pd"],
        ["09.45–10.30", "Kreativitas, Inovasi dan Kewirausahaan", "Muh. Rizal Samad, S.Pd., M.Pd"],
        ["10.30–11.15", "Kreativitas, Inovasi dan Kewirausahaan", "Muh. Rizal Samad, S.Pd., M.Pd"],
        ["11.15–12.00", "Pendidikan Pancasila", "Haeruddin B, S.Pd"],
        ["13.00–13.45", "Pendidikan Pancasila", "Haeruddin B, S.Pd"],
        ["13.45–14.30", "Konsentrasi Keahlian TKJ (Perencanaan dan pengalamatan)", "Sunarni Landang, S.Kom"],
        ["14.30–15.15", "Konsentrasi Keahlian TKJ (Perencanaan dan pengalamatan)", "Sunarni Landang, S.Kom"],
        ["15.15–16.00", "Konsentrasi Keahlian TKJ (Perencanaan dan pengalamatan)", "Sunarni Landang, S.Kom"]
    ],

    "Kamis": [
        ["07.15–08.00", "Mulok (BTQ)", "Amir, S.Pd"],
        ["08.00–08.45", "Mulok (BTQ)", "Amir, S.Pd"],
        ["08.45–09.30", "Konsentrasi Keahlian TKJ (Administrasi Sistem Jaringan)", "Achmad Nur Syafitri, S.Pd"],
        ["09.45–10.30", "Konsentrasi Keahlian TKJ (Administrasi Sistem Jaringan)", "Achmad Nur Syafitri, S.Pd"],
        ["10.30–11.15", "Konsentrasi Keahlian TKJ (Administrasi Sistem Jaringan)", "Achmad Nur Syafitri, S.Pd"],
        ["11.15–12.00", "Konsentrasi Keahlian TKJ (Administrasi Sistem Jaringan)", "Achmad Nur Syafitri, S.Pd"],
        ["13.00–13.45", "Bahasa Inggris", "Nur Rahmah Ramadhani, S.Pd"],
        ["13.45–14.30", "Bahasa Inggris", "Nur Rahmah Ramadhani, S.Pd"],
        ["14.30–15.15", "Bahasa Inggris", "Nur Rahmah Ramadhani, S.Pd"],
        ["15.15–16.00", "Bahasa Inggris", "Nur Rahmah Ramadhani, S.Pd"]
    ],

    "Jumat": [
        ["07.15–08.00", "—", ""],
        ["08.00–08.45", "Bahasa Indonesia", "Alimiah, S.Pd"],
        ["08.45–09.30", "Bahasa Indonesia", "Alimiah, S.Pd"],
        ["09.45–10.30", "Bahasa Indonesia", "Alimiah, S.Pd"],
        ["10.30–11.15", "Konsentrasi Keahlian TKJ (Pemasangan dan Konfigurasi)", "Ariyanto, S.T"],
        ["11.15–12.00", "Konsentrasi Keahlian TKJ (Pemasangan dan Konfigurasi)", "Ariyanto, S.T"],
        ["13.00–13.45", "Konsentrasi Keahlian TKJ (Pemasangan dan Konfigurasi)", "Ariyanto, S.T"],
        ["13.45–14.30", "Konsentrasi Keahlian TKJ (Pemasangan dan Konfigurasi)", "Ariyanto, S.T"],
        ["14.30–15.15", "Sejarah", "Hj. Elzah Salsabila, S.Pd"],
        ["15.15–16.00", "Sejarah", "Hj. Elzah Salsabila, S.Pd"]
    ]

};


/* ========================================
   6. MENAMPILKAN JADWAL
======================================== */

function displaySchedule() {

    const container =
        document.getElementById("scheduleContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    Object.keys(schedule).forEach(function(day) {

        const section =
            document.createElement("section");

        section.className = "schedule-day";

        section.innerHTML = `
            <h2 class="section-title">
                ${day}
            </h2>

            <div class="schedule-wrapper">

                <table class="schedule-table">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Waktu</th>
                            <th>Mata Pelajaran</th>
                        </tr>
                    </thead>

                    <tbody></tbody>

                </table>

            </div>
        `;

        const tbody =
            section.querySelector("tbody");

        schedule[day].forEach(function(item, index) {

            const row =
                document.createElement("tr");

            const teacher = item[2]
                ? `<span class="teacher">
                    Guru: ${item[2]}
                   </span>`
                : "";

            row.innerHTML = `
                <td>${index + 1}</td>

                <td>${item[0]}</td>

                <td>
                    <span class="subject">
                        ${item[1]}
                    </span>

                    ${teacher}
                </td>
            `;

            tbody.appendChild(row);

        });

        container.appendChild(section);

    });

}


/* ========================================
   7. GALERI
======================================== */

let galleryImages = [];
let currentGalleryIndex = 0;


function openGallery(images) {

    galleryImages = images || [];

    currentGalleryIndex = 0;

    showGalleryImage();

    const modal =
        document.getElementById("galleryModal");

    if (modal) {
        modal.classList.add("show");
    }

}


function showGalleryImage() {

    const image =
        document.getElementById("galleryImage");

    if (
        !image ||
        galleryImages.length === 0
    ) {
        return;
    }

    image.src =
        galleryImages[currentGalleryIndex];

}


function nextGalleryImage() {

    if (galleryImages.length === 0) {
        return;
    }

    currentGalleryIndex =
        (currentGalleryIndex + 1)
        % galleryImages.length;

    showGalleryImage();

}


function previousGalleryImage() {

    if (galleryImages.length === 0) {
        return;
    }

    currentGalleryIndex =
        (currentGalleryIndex - 1 +
         galleryImages.length)
        % galleryImages.length;

    showGalleryImage();

}


function closeGallery() {

    const modal =
        document.getElementById("galleryModal");

    if (modal) {
        modal.classList.remove("show");
    }

}

/* GESER FOTO GALERI */

let galleryTouchStartX = 0;
let galleryTouchEndX = 0;

const galleryModal = document.getElementById("galleryModal");

if (galleryModal) {

    galleryModal.addEventListener("touchstart", function(event) {

        galleryTouchStartX =
            event.changedTouches[0].screenX;

    });

    galleryModal.addEventListener("touchend", function(event) {

        galleryTouchEndX =
            event.changedTouches[0].screenX;

        const distance =
            galleryTouchEndX - galleryTouchStartX;

        if (Math.abs(distance) < 50) {
            return;
        }

        if (distance < 0) {

            nextGalleryImage();

        } else {

            previousGalleryImage();

        }

    });

}


/* ========================================
   8. UPLOAD
======================================== */

function openUploadModal() {

    const modal =
        document.getElementById("uploadModal");

    if (modal) {
        modal.classList.add("show");
    }

}


function closeUploadModal() {

    const modal =
        document.getElementById("uploadModal");

    if (modal) {
        modal.classList.remove("show");
    }

}

    async function submitUpload() {

    const type = document.getElementById("uploadType");
    const category = document.getElementById("uploadCategory");
    const fileInput = document.getElementById("uploadFile");

    if (!type || !category || !fileInput) {
        alert("Form upload belum lengkap.");
        return;
    }

    if (selectedFileList.length === 0) {
        alert("⚠️ Silakan pilih foto atau video terlebih dahulu.");
        return;
    }

    const selectedType = type.value;
    const selectedCategory = category.value;

    // Periksa jenis file
    for (const file of selectedFileList) {

        if (
            selectedType === "Foto" &&
            !file.type.startsWith("image/")
        ) {
            alert(
                "⚠️ Ada file yang bukan foto.\n\n" +
                "Jika memilih Foto, semua file harus berupa foto."
            );
            return;
        }

        if (
            selectedType === "Video" &&
            !file.type.startsWith("video/")
        ) {
            alert(
                "⚠️ Ada file yang bukan video.\n\n" +
                "Jika memilih Video, semua file harus berupa video."
            );
            return;
        }
    }

    try {

        for (const file of selectedFileList) {

            await window.saveUploadData(
                file,
                selectedType,
                selectedCategory
            );

        }

        alert(
            "✅ PENGAJUAN BERHASIL DIKIRIM!\n\n" +
            "Jumlah file: " +
            selectedFileList.length +
            "\nJenis: " +
            selectedType +
            "\nKategori: " +
            selectedCategory +
            "\n\n" +
            "Pengajuan sekarang menunggu persetujuan admin."
        );

        selectedFileList = [];
        fileInput.value = "";
        displaySelectedFiles();
        closeUploadModal();

    } catch (error) {

        console.error(error);

        alert(
            "❌ Gagal mengirim pengajuan.\n\n" +
            "Periksa koneksi internet dan konfigurasi Firebase."
        );
    }
}


/* MENAMPILKAN DAN MENGHAPUS FILE YANG DIPILIH */

const uploadFile = document.getElementById("uploadFile");
const selectedFiles = document.getElementById("selectedFiles");

let selectedFileList = [];

if (uploadFile && selectedFiles) {

    uploadFile.addEventListener("change", function () {

        selectedFileList = Array.from(this.files);

        displaySelectedFiles();

    });

}

function displaySelectedFiles() {

    selectedFiles.innerHTML = "";

    if (selectedFileList.length === 0) {
        return;
    }

    const title = document.createElement("div");

    title.className = "selected-file";

    title.textContent =
        selectedFileList.length + " file dipilih";

    selectedFiles.appendChild(title);


    selectedFileList.forEach(function(file, index) {

        const item = document.createElement("div");

        item.className = "selected-file";


        const name = document.createElement("span");

        name.textContent =
            (file.type.startsWith("video/") ? "🎥 " : "📷 ") +
            file.name;


        const removeButton = document.createElement("button");

        removeButton.textContent = "×";

        removeButton.type = "button";

        removeButton.onclick = function() {

            selectedFileList.splice(index, 1);

            displaySelectedFiles();

        };


        item.appendChild(name);

        item.appendChild(removeButton);

        selectedFiles.appendChild(item);

    });

}


/* ========================================
   9. VIDEO
======================================== */

const videoCollections = {

    "Video Random": [
        "assets/galeri/video random/video random1.mp4",
        "assets/galeri/video random/video random2.mp4",
        "assets/galeri/video random/video random3.mp4",
        "assets/galeri/video random/video random4.mp4",
        "assets/galeri/video random/video random5.mp4",
        "assets/galeri/video random/video random6.mp4",
        "assets/galeri/video random/video random7.mp4",
        "assets/galeri/video random/video random8.mp4",
        "assets/galeri/video random/video random9.mp4",
        "assets/galeri/video random/video random10.mp4",
        "assets/galeri/video random/video random11.mp4",
        "assets/galeri/video random/video random12.mp4",
        "assets/galeri/video random/video random13.mp4",
        "assets/galeri/video random/video random14.mp4"
    ],

    "Video Kegiatan": [
        "assets/galeri/video kegiatan/video kegiatan1.mp4",
        "assets/galeri/video kegiatan/video kegiatan2.mp4",
        "assets/galeri/video kegiatan/video kegiatan3.mp4",

    ]

};


let currentVideoList = [];
let currentVideoIndex = 0;


function openVideo(category) {

    currentVideoList =
        videoCollections[category] || [];

    if (currentVideoList.length === 0) {
        alert("Belum ada video.");
        return;
    }

    currentVideoIndex = 0;

    const title =
        document.getElementById("videoTitle");

    if (title) {
        title.textContent = category;
    }

    showVideo();

    const modal =
        document.getElementById("videoModal");

    if (modal) {
        modal.classList.add("show");
    }

}


function showVideo() {

    const player =
        document.getElementById("videoPlayer");

    if (!player || currentVideoList.length === 0) {
        return;
    }

    player.src =
        currentVideoList[currentVideoIndex];

    player.load();

}


function closeVideo() {

    const video =
        document.getElementById("videoPlayer");

    const modal =
        document.getElementById("videoModal");

    if (video) {
        video.pause();
        video.currentTime = 0;
        video.src = "";
    }

    if (modal) {
        modal.classList.remove("show");
    }

}


function nextVideo() {

    if (currentVideoList.length === 0) {
        return;
    }

    if (
        currentVideoIndex <
        currentVideoList.length - 1
    ) {
        currentVideoIndex++;
    } else {
        currentVideoIndex = 0;
    }

    showVideo();

}


function previousVideo() {

    if (currentVideoList.length === 0) {
        return;
    }

    if (currentVideoIndex > 0) {
        currentVideoIndex--;
    } else {
        currentVideoIndex =
            currentVideoList.length - 1;
    }

    showVideo();

}


/* ========================================
   10. ESC UNTUK MENUTUP MODAL
======================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeGallery();
            closeUploadModal();

        }

    }
);


/* ========================================
   11. JALANKAN SAAT HALAMAN SELESAI DIMUAT
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayMembers(members);

        setupMemberSearch();

        displaySchedule();

    }
);

/* ========================================
   MENAMPILKAN JADWAL PELAJARAN
======================================== */

function displaySchedule() {

    const container = document.getElementById("schedule");

    if (!container) return;

    container.innerHTML = "";

    for (const day in schedule) {

        const section = document.createElement("section");
        section.className = "schedule-section";

        const title = document.createElement("h2");
        title.textContent = day.toUpperCase();

        const wrapper = document.createElement("div");
        wrapper.className = "schedule-table-wrapper";

        const table = document.createElement("table");
        table.className = "schedule-table";

        table.innerHTML = `
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Waktu</th>
                    <th>Mata Pelajaran</th>
                </tr>
            </thead>

            <tbody>
                ${schedule[day].map((item, index) => {

                    const time = item[0];
                    const subject = item[1];
                    const teacher = item[2];

                    return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${time}</td>
                            <td>
                                ${subject}
                                ${
                                    teacher
                                    ? `<span class="teacher">Guru: ${teacher}</span>`
                                    : ""
                                }
                            </td>
                        </tr>
                    `;

                }).join("")}
            </tbody>
        `;

        wrapper.appendChild(table);
        section.appendChild(title);
        section.appendChild(wrapper);
        container.appendChild(section);
    }
}


/* Jalankan jadwal setelah halaman selesai dimuat */

document.addEventListener("DOMContentLoaded", () => {
    displaySchedule();
});

    /* ========================================
   KATEGORI UPLOAD
======================================== */

const uploadType = document.getElementById("uploadType");
const uploadCategory = document.getElementById("uploadCategory");

const uploadFileInput = document.getElementById("uploadFile");

if (uploadType && uploadFileInput) {
    uploadType.addEventListener("change", function () {

        if (this.value === "Video") {
            uploadFileInput.setAttribute("accept", "video/*");
        } else {
            uploadFileInput.setAttribute("accept", "image/*");
        }

        // Hapus file yang sebelumnya dipilih
        selectedFileList = [];
        uploadFileInput.value = "";
        displaySelectedFiles();
    });
}

if (uploadType && uploadCategory) {

    uploadType.addEventListener("change", function () {

        uploadCategory.innerHTML = "";

        if (this.value === "Video") {

            uploadCategory.innerHTML = `
                <option>Video Kegiatan</option>
                <option>Video Random</option>
            `;

        } else {

            uploadCategory.innerHTML = `
                <option>Foto Bersama</option>
                <option>Foto Random</option>
                <option>Foto</option>
                <option>Foto Kegiatan</option>
            `;

        }

    });

}


/* ========================================
   MENU ADMIN
======================================== */

function selectAdminMenu(element, sectionId) {

    // Hapus status aktif dari semua menu
    const menus = document.querySelectorAll(".admin-menu-item");

    menus.forEach(function(menu) {
        menu.classList.remove("active");
    });

    // Jadikan menu yang diklik aktif
    element.classList.add("active");

    // Cari bagian yang dipilih
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* ========================================
   ADMIN - TAMPILKAN UPLOAD MASUK
======================================== */

async function loadAdminUploads() {

    const list = document.getElementById("adminUploadList");

    if (!list) return;

    try {

        // Tunggu Firebase Services siap
        if (!window.getPendingUploads) {
            setTimeout(loadAdminUploads, 500);
            return;
        }

        const uploads = await window.getPendingUploads();

        list.innerHTML = "";

        // Jika belum ada pengajuan
        if (uploads.length === 0) {

            list.innerHTML = `
                <tr>
                    <td colspan="9" class="admin-empty">
                        Belum ada upload yang menunggu persetujuan.
                    </td>
                </tr>
            `;

            updateAdminUploadStats([]);
            return;
        }

        // Tampilkan setiap pengajuan
        uploads.forEach(function(upload, index) {

            const row = document.createElement("tr");

            // Format tanggal
            let tanggal = "-";

            if (upload.createdAt) {
                if (upload.createdAt.toDate) {
                    tanggal = upload.createdAt.toDate().toLocaleString("id-ID");
                } else {
                    tanggal = "-";
                }
            }

            row.innerHTML = `
                <td>${index + 1}</td>

                <td>
                    <div class="upload-preview">
                        ${
                            upload.jenis === "Foto"
                            ? "🖼️"
                            : "▶️"
                        }
                    </div>
                </td>

                <td>${upload.namaFile || "-"}</td>

                <td>${upload.jenis || "-"}</td>

                <td>${upload.kategori || "-"}</td>

                <td>${tanggal}</td>

                <td>
                    <span class="upload-status">
                        Menunggu
                    </span>
                </td>

                <td>
                    <div class="upload-action">
                        <button
                            class="upload-view"
                            title="Lihat">
                            👁
                        </button>

                        <button
                            class="upload-approve"
                            title="Setujui">
                            ✓
                        </button>

                        <button
                            class="upload-reject"
                            title="Tolak">
                            ×
                        </button>
                    </div>
                </td>
            `;

            list.appendChild(row);

        });

        updateAdminUploadStats(uploads);

    } catch (error) {

        console.error("Gagal memuat upload admin:", error);

        list.innerHTML = `
            <tr>
                <td colspan="9" class="admin-empty">
                    ❌ Gagal mengambil data upload dari Firebase.
                </td>
            </tr>
        `;
    }
}

/* ========================================
   UPDATE JUMLAH UPLOAD
======================================== */

function updateAdminUploadStats(uploads) {

    const photoCount = uploads.filter(function(upload) {
        return upload.jenis === "Foto";
    }).length;

    const videoCount = uploads.filter(function(upload) {
        return upload.jenis === "Video";
    }).length;

    const photoElement = document.getElementById("adminPhotoCount");
    const videoElement = document.getElementById("adminVideoCount");
    const badgeElement = document.getElementById("pendingBadge");

    if (photoElement) {
        photoElement.textContent = photoCount;
    }

    if (videoElement) {
        videoElement.textContent = videoCount;
    }

    if (badgeElement) {
        badgeElement.textContent = uploads.length;
    }
}


/* ========================================
   JALANKAN DI HALAMAN ADMIN
======================================== */

if (document.getElementById("adminUploadList")) {
    loadAdminUploads();
}