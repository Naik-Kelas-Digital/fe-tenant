import React from "react";

const PaymentPage = () => {
  return (
    <div className="pt-6 pb-6 mb-6">
      <div className="w-[80%] mx-auto ">
      <div className="container my-5 ml-2">
      <h1 className="mb-4">Konfirmasikan dan bayar</h1>

      <div className="row">
        <div className="col-md-8">
          <h2>Perjalanan Anda</h2>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-1">Tanggal</p>
              <p className="fw-bold">14–19 Nov</p>
            </div>
            <button className="btn btn-link">Edit</button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-1">Tamu</p>
              <p className="fw-bold">1 tamu</p>
            </div>
            <button className="btn btn-link">Edit</button>
          </div>

          <hr className="my-4" />

          <h3>Masuk ke akun atau daftar untuk memesan</h3>
          <div className="mb-3">
            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Negara/Wilayah">
              <option value="Default">Negara/Wilayah: Indonesia (+62)</option>
              {/* Tambahkan opsi lain jika perlu */}
            </select>
          </div>
          <input type="tel" placeholder="Nomor telepon" className="form-control mb-3" />
          <small className="text-muted">
            Kami akan menelepon atau mengirim SMS guna mengonfirmasi nomor Anda. Tarif standar SMS dan data berlaku.
          </small>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="/images/p3.jpg" alt="Koh Koon" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Koh Koon</h5>
              <p className="card-text">Entire Villa</p>
              <p className="card-text">⭐ 5.00 (3 reviews)</p>
            </div>
            <div className="card-footer">
              <h6>Price Details</h6>
              <p>Rp25.371.192,00 x 5 malam</p>
              <p>Rp126.855.960,00</p>
              <p>Tax</p>
              <p>Rp8.879.917,00</p>
              <p className="fw-bold">Total (IDR)</p>
              <p className="fw-bold">Rp135.735.877,00</p>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary mt-4">Submit</button>
    </div>
      </div>
    </div>
  );
};

export default PaymentPage;
