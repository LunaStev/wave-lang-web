---
sidebar_position: 3
---

# Pernyataan IF

## Pengenalan

Seksyen ini menerangkan tatabahasa dan cara penggunaan salah satu pernyataan kawalan yang disediakan dalam bahasa Wave, yaitu pernyataan IF.
Pernyataan IF adalah struktur kawalan asas yang menilai keadaan dan hanya melaksanakan blok kod tertentu jika keadaan tersebut benar.

Ini membolehkan program untuk melakukannya berdasarkan pelbagai situasi dan kondisi, lebih daripada sekadar mengalir dari atas ke bawah.
Pernyataan IF adalah elemen penting dalam hampir semua program dan digunakan untuk mengimplementasikan cabang logik dan kawalan aliran.

## Struktur Dasar

Pernyataan IF pertama harus menilai ekspresi kemudian hanya melaksanakan blok kod di dalam kurungan `{}` jika keputusan adalah benar (True).
Sekiranya keadaan adalah palsu (False), ia akan melangkau blok tersebut dan bergerak ke kod berikutnya.

Struktur asas pernyataan IF dalam Wave adalah seperti berikut.

```wave
if (keadaan) {
    // Kod yang akan dilaksanakan jika keadaan benar
}
```

Operasi perbandingan dan logik boleh digunapakai dengan bebas dalam ekspresi tersebut.
Sebagai contoh, anda boleh membandingkan hubungan nilai menggunakan operator perbandingan seperti `==`, `!=`, `<`, `>`, `<=`, `>=`, dan menggunakan operator logik seperti `&&`, `||`, `!` untuk menggabungkan pelbagai syarat.

Keputusan ekspresi mesti sama ada benar atau palsu, dan sekiranya palsu, kod dalam blok IF tidak akan dilaksanakan.

## Contoh

Berikut adalah contoh mudah paling asas bagi pernyataan IF.

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("Cuaca amat panas.");
}
```

Dalam kod di atas, nilai pembolehubah `temperature` dinilai untuk menentukan sama ada ia lebih besar daripada 25.
Jika keadaan adalah benar, mesej `"Cuaca sangat panas."` akan dipaparkan, dan jika tidak, tiada tindakan yang akan diambil.

Dengan cara ini, pernyataan IF digunakan apabila anda ingin menjalankan kod hanya apabila kondisi tertentu dipenuhi.

## Pernyataan IF-ELSE

Jika terdapat kod yang perlu dilaksanakan walaupun keadaan tidak benar, anda boleh menambah syarat ELSE kepada pernyataan IF.
Pernyataan IF-ELSE adalah struktur kawalan yang membolehkan salah satu dari dua blok kod dilaksanakan berdasarkan hasil keadaan.

Struktur asas adalah seperti berikut.

```wave
if (조건) {
    // 조건이 참일 경우 실행될 코드
} else {
    // 조건이 거짓일 경우 실행될 코드
}
```

조건이 참이면 IF 블록이 실행되고, 조건이 거짓이면 ELSE 블록이 실행됩니다.
두 블록 중 하나만 실행되며, 동시에 실행되는 경우는 없습니다.

다음은 IF-ELSE 문을 사용한 예제입니다.

```wave
var score :i32 = 70;

if (score >= 60) {
    println("합격입니다!");
} else {
    println("불합격입니다.");
}
```

이 코드에서는 `score`가 60 이상인지 여부에 따라 서로 다른 메시지를 출력합니다.
조건이 참일 경우 `"합격입니다!"`가 출력되며, 그렇지 않으면 `"불합격입니다."`가 출력됩니다.

## 중첩 IF 문

IF 문은 다른 IF 문 내부에서도 사용할 수 있으며, 이를 중첩 IF 문이라고 합니다.
중첩 IF 문은 여러 단계의 조건을 순차적으로 평가해야 할 때 유용합니다.

다음 예제는 점수에 따라 서로 다른 결과를 출력하는 중첩 IF 문의 예시입니다.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("우수한 성적입니다!");
    } else {
        println("합격입니다.");
    } 
} else {
    println("불합격입니다.");
}
```

이 코드에서는 먼저 점수가 60 이상인지 확인합니다.
60 미만일 경우에는 바로 `"불합격입니다."`가 출력됩니다.
60 이상일 경우에는 다시 한 번 조건을 평가하여, 점수가 90 이상이면 `"우수한 성적입니다!"`를 출력하고, 그렇지 않으면 `"합격입니다."`를 출력합니다.

이처럼 중첩 IF 문을 사용하면 복잡한 조건 분기를 단계적으로 표현할 수 있습니다.

## 요약

IF 문은 조건을 평가하여 프로그램의 실행 흐름을 제어하는 기본적인 제어문입니다.
ELSE 절을 함께 사용하면 조건이 거짓일 경우의 동작도 명확히 정의할 수 있으며,
중첩 IF 문을 통해 여러 조건을 조합한 복잡한 분기 처리도 가능합니다.

IF 문을 적절히 활용하면 프로그램의 흐름을 보다 논리적이고 명확하게 구성할 수 있습니다.