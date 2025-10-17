const holidays = ["正月", "成人の日", "建国記念の日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日"];

// for文を使った場合
for (let i = 0; i < holidays.length; i++) {
    console.log(holidays[i]);
}

// while文を使った場合
let i = 0;
while (i < holidays.length) {
    console.log(holidays[i]);
    i++;
}