// Firebase Services XI TKJ FOUR

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

import { app } from "./firebase-config.js";

const db = getFirestore(app);


// ========================================
// SIMPAN PENGAJUAN UPLOAD
// ========================================

async function saveUploadData(file, type, category) {

    try {

        const docRef = await addDoc(
            collection(db, "uploads"),
            {
                namaFile: file.name,
                jenis: type,
                kategori: category,
                status: "pending",
                createdAt: serverTimestamp()
            }
        );

        console.log("Upload tersimpan:", docRef.id);

        return docRef.id;

    } catch (error) {

        console.error("Gagal menyimpan upload:", error);

        throw error;
    }
}


// ========================================
// AMBIL UPLOAD YANG MENUNGGU PERSETUJUAN
// ========================================

async function getPendingUploads() {

    try {

        const snapshot = await getDocs(
            collection(db, "uploads")
        );

        const uploads = [];

        snapshot.forEach(function(doc) {

            const data = doc.data();

            if (data.status === "pending") {

                uploads.push({
                    id: doc.id,
                    ...data
                });

            }

        });

        // Urutkan dari upload terbaru
        uploads.sort(function(a, b) {

            const timeA = a.createdAt?.seconds || 0;
            const timeB = b.createdAt?.seconds || 0;

            return timeB - timeA;

        });

        return uploads;

    } catch (error) {

        console.error(
            "Gagal mengambil data upload:",
            error
        );

        throw error;
    }
}


// ========================================
// HUBUNGKAN KE WEBSITE
// ========================================

window.saveUploadData = saveUploadData;
window.getPendingUploads = getPendingUploads;