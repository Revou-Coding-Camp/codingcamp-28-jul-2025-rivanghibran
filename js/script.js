displayName();

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("name").value;
    const tanggal = document.getElementById("tanggallahir").value;
    const pesan = document.getElementById("pesan").value;
    const jeniskelamin = document.querySelector('input[name="jeniskelamin"]:checked')?.value || "-";

    const waktu = new Date().toString();

    const output = `
      <p><b>Current time :</b> ${waktu}</p>
      <p><b>Nama :</b> ${nama}</p>
      <p><b>Tanggal Lahir :</b> ${tanggal}</p>
      <p><b>Jenis Kelamin :</b> ${jeniskelamin}</p>
      <p><b>Pesan :</b> ${pesan}</p>
    `;

    document.getElementById("result-form").innerHTML = output;
  });
});

function displayName() {
    const  popup = prompt("Please enter your name:");
    if (popup) {
        const welcomeElement = document.getElementById('welcomename');
        welcomeElement.textContent = popup;
    } else {
        document.getElementById("welcomename").textContent = "Guest";
    }
}