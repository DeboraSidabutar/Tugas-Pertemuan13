# Mobile Automation Testing - WDIO & Appium
Screenshot log berhasil di terminal
<img width="1366" height="689" alt="image" src="https://github.com/user-attachments/assets/58a13ba7-1a8e-4170-9985-9e1da89888e6" />

Screenshot layar di device saat aplikasi launch
<img width="1080" height="2388" alt="launch" src="https://github.com/user-attachments/assets/d9806daa-45e1-4f99-8db4-93154f5c640e" />


## Deskripsi Project

Project ini merupakan tugas Mobile Automation Testing menggunakan **WebdriverIO (WDIO), Appium, dan JavaScript** untuk melakukan pengujian sederhana pada aplikasi Sauce Labs (Swag Labs).

Pengujian dilakukan menggunakan **real Android device (perangkat fisik)**, yaitu smartphone Vivo dengan sistem operasi Android 15. Project ini tidak menggunakan Android Emulator.

## Tools & Technologies

- JavaScript
- Node.js
- WebdriverIO (WDIO)
- Appium
- Appium Inspector
- UiAutomator2
- Visual Studio Code (VS Code)
- Android Debug Bridge (ADB)

## Device Testing

| Informasi | Detail |
|---|---|
| Device | Vivo (Real Device) |
| Operating System | Android 15 |
| Automation Framework | WebdriverIO |
| Automation Server | Appium |
| Automation Driver | UiAutomator2 |
| Application | Sauce Labs (Swag Labs) |

## Test Scenario

Pengujian dilakukan pada aplikasi Sauce Labs dengan skenario berikut:

1. Membuka aplikasi Sauce Labs pada real device.
2. Memverifikasi bahwa halaman login berhasil ditampilkan.
3. Mengambil screenshot halaman aplikasi saat pertama kali dibuka.
4. Melakukan login menggunakan akun `standard_user`.
5. Memverifikasi bahwa halaman Products berhasil ditampilkan.
6. Mengambil screenshot halaman Products setelah login berhasil.

## Screenshot Evidence

Pengambilan screenshot telah diintegrasikan langsung ke dalam file `test/specs/login.spec.js` menggunakan fungsi `driver.saveScreenshot()`.

Dengan demikian, screenshot dihasilkan secara otomatis ketika test dijalankan, tanpa perlu mengambil gambar secara manual dari perangkat.

Screenshot yang dihasilkan:

- `launch.png` – Tampilan aplikasi saat berhasil dibuka dan menampilkan halaman login.
- `products.png` – Tampilan halaman Products setelah proses login berhasil.

File screenshot tersimpan di folder `screenshots`.


## How to Run

### 1. Install Dependencies

```bash
npm install
```

### 2. Connect Real Device

Hubungkan smartphone Vivo ke komputer menggunakan USB dan aktifkan USB Debugging.

Pastikan perangkat sudah terdeteksi melalui ADB:

```bash
adb devices
```

### 3. Start Appium Server

Pastikan Appium Server sudah berjalan dan perangkat terhubung.

### 4. Execute Automation Test

Jalankan perintah:

```bash
npm run wdio
```

## Test Result

Pengujian berhasil dijalankan dengan hasil:

- Test Case: 1
- Passed: 1
- Failed: 0

Proses automation berhasil membuka aplikasi, memverifikasi halaman login, melakukan login, dan memverifikasi halaman Products pada real Android device.

## Author

**Debora Sidabutar**

Mobile Automation Testing - Pertemuan 13
