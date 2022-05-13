# FAKE-NTPN-GENERATOR

Latar belakang masalah

- Pembuatan data testing untuk simulasi pembayaran pajak
- Pembuatan data testing dilakukan melalui shell script
- Hanya tersedia melalui console terminal sehingga hanya dapat diakses melalui perangkat yang memliki akses ke terminal
- Copy paste yang rumit

Solusi

- Pembuatan Web Interface sehingga dapat diakses dari browser
- Copy paste yang mudah

Struktur Aplikasi

- Flask untuk Web Server (HTML+CSS (Tailwind framework))

Menjalankan Program

```
// expose ke external network
flask run --host=0.0.0.0
```
