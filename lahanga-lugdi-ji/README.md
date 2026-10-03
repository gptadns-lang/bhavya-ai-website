# Lahanga Lugdi Ji — Phase-1 Live Config
- Admin WhatsApp: 9772549136 (wa.me/919772549136)
- Naam: Lahanga / Lugdi
- Commission: 10% fix
- Delivery: All India
- Payment: COD only (online baad me)
- Logo: baad me aayega
- Address: har product me dukaan naam+sheher; seller judte hi update hoga

Ye Phase-1 website hai — bina login/payment ke launch karne ke liye.

## Kaise chalaye
- File kholo: `lahanga-lugdi-ji/index.html` (double-click ya VS Code Live Server)
- Preview pane me dekho.

## Apna data kaise badlo (sirf 1 jagah)
`index.html` me `<script>` ke upar ye 2 line badlo:
```
const ADMIN_WHATSAPP = "919999999999"; // apna 10-digit number, bina + ke, jaise "919876543210"
const COMMISSION_PCT = 10; // apna commission %
```
- `PRODUCTS` array me 8 sample dress hain — photo (emoji/bg), naam, price, dukaan badal do.
- Contact section me Address + UPI ID bharna hai.

## Grahak flow
Dress → Size → Naam/Address → WhatsApp Order → admin + dukandaar ko message.

## Seller flow
Seller Form → WhatsApp par details → admin verify → product list.

## Order Register
Har order browser ke localStorage me save hota hai (demo hisaab ke liye).

## Phase-2 ke liye mujhe ye chahiye (jab aap doge tab bana dunga)
1. Final naam confirm: "Lahanga Lugdi Ji"? (spelling: Lahanga / Lehenga?)
2. Admin WhatsApp + Call number, Address, UPI ID
3. Commission fix % (salah: 10% se start karo)
4. 5-6 asli product photo (mobile se khichi chalegi) + price + dukaan naam/sheher
5. Delivery area: sirf local (Jhabua/Alirajpur/Dhar?) ya all-India courier?
6. Language: Hindi / Hinglish? (abhi Hinglish rakha hai)
7. Logo hai kya? Nahi to naam se bana dunga.

Phase-2 me: Seller login, khud product add, Razorpay/UPI online payment, auto-commission, order tracking jud jayega.
