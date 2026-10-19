// Mendengarkan event 'submit' pada form saat tombol diklik atau ditekan Enter
document.getElementById('kasirForm').addEventListener('submit', function(event) {
    // Mencegah halaman melakukan reload secara otomatis
    event.preventDefault();

    // 1. Mengambil nilai input dari form HTML
    const namaBarang = document.getElementById('namaBarang').value;
    const hargaBarang = parseFloat(document.getElementById('hargaBarang').value);
    const qty = parseInt(document.getElementById('qty').value);

    // 2. Menghitung total harga kotor (subtotal)
    const subtotal = hargaBarang * qty;

    // 3. Pengecekan Diskon: Jika total > 50.000, berikan diskon 10%
    let diskon = 0;
    if (subtotal > 50000) {
        diskon = subtotal * 0.10;
    }

    // 4. Menghitung total bersih yang harus dibayar
    const totalBayar = subtotal - diskon;

    // 5. Memasukkan hasil perhitungan ke dalam elemen struk belanja
    document.getElementById('strukNama').innerText = namaBarang;
    document.getElementById('strukHarga').innerText = hargaBarang.toLocaleString('id-ID');
    document.getElementById('strukQty').innerText = qty;
    document.getElementById('strukSubtotal').innerText = subtotal.toLocaleString('id-ID');

    document.getElementById('subtotalVal').innerText = 'Rp ' + subtotal.toLocaleString('id-ID');
    document.getElementById('diskonVal').innerText = 'Rp ' + diskon.toLocaleString('id-ID');
    document.getElementById('totalBayarVal').innerText = 'Rp ' + totalBayar.toLocaleString('id-ID');

    // 6. Mengubah properti CSS untuk menampilkan struk belanja di layar
    document.getElementById('strukBelanja').style.display = 'block';
});