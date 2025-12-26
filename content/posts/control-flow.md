---
title: "Cấu trúc điều khiển trong Java và JavaScript"
date: "2025-10-08"
excerpt: "Hướng dẫn chi tiết về cấu trúc điều khiển (if-else, switch) và vòng lặp (for, while) trong lập trình, với ví dụ thực tế bằng Java và JavaScript."
category: "Lập trình cơ bản"
tags: ["Java", "JavaScript", "Control Flow", "Loop", "Condition"]
author: "Huỳnh Anh Khoa"
---

# Cấu trúc điều khiển trong lập trình

Cấu trúc điều khiển là nền tảng của lập trình, cho phép chương trình đưa ra quyết định và thực hiện các tác vụ lặp. Bài viết này giới thiệu hai loại cấu trúc điều khiển chính: câu lệnh điều kiện và vòng lặp.

## Câu lệnh điều kiện

Câu lệnh điều kiện cho phép chương trình thực hiện các hành động khác nhau dựa trên điều kiện cụ thể.

### 1. Cấu trúc if-else

#### Java

```java
int age = 18;
if (age >= 18) {
    System.out.println("Bạn đã đủ tuổi bầu cử!");
} else if (age >= 16) {
    System.out.println("Bạn đã đủ tuổi làm CMND!");
} else {
    System.out.println("Bạn chưa đủ tuổi!");
}
```

#### JavaScript

```javascript
const age = 18;
if (age >= 18) {
    console.log("Bạn đã đủ tuổi bầu cử!");
} else if (age >= 16) {
    console.log("Bạn đã đủ tuổi làm CMND!");
} else {
    console.log("Bạn chưa đủ tuổi!");
}
```

### 2. Cấu trúc switch-case

Switch-case thích hợp khi cần so sánh một biến với nhiều giá trị khác nhau.

#### Java

```java
int day = 3;
switch (day) {
    case 1:
        System.out.println("Thứ Hai");
        break;
    case 2:
        System.out.println("Thứ Ba");
        break;
    case 3:
        System.out.println("Thứ Tư");
        break;
    default:
        System.out.println("Ngày khác trong tuần");
}
```

#### JavaScript

```javascript
const day = 3;
switch (day) {
    case 1:
        console.log("Thứ Hai");
        break;
    case 2:
        console.log("Thứ Ba");
        break;
    case 3:
        console.log("Thứ Tư");
        break;
    default:
        console.log("Ngày khác trong tuần");
}
```

## Vòng lặp

Vòng lặp cho phép thực hiện một khối lệnh nhiều lần. Có hai loại vòng lặp chính: `for` và `while`.

### 1. Vòng lặp for

#### Java

```java
// Vòng lặp đếm từ 1 đến 5
for (int i = 1; i <= 5; i++) {
    System.out.println("Số " + i);
}

// Duyệt mảng
String[] fruits = {"Táo", "Cam", "Chuối"};
for (String fruit : fruits) {
    System.out.println(fruit);
}
```

#### JavaScript

```javascript
// Vòng lặp đếm từ 1 đến 5
for (let i = 1; i <= 5; i++) {
    console.log(`Số ${i}`);
}

// Duyệt mảng
const fruits = ["Táo", "Cam", "Chuối"];
for (const fruit of fruits) {
    console.log(fruit);
}
```

### 2. Vòng lặp while và do-while

#### Java

```java
// While loop
int count = 0;
while (count < 3) {
    System.out.println("Count: " + count);
    count++;
}

// Do-while loop
int num = 1;
do {
    System.out.println("Số: " + num);
    num *= 2;
} while (num <= 8);
```

#### JavaScript

```javascript
// While loop
let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}

// Do-while loop
let num = 1;
do {
    console.log(`Số: ${num}`);
    num *= 2;
} while (num <= 8);
```

## Lưu ý quan trọng

1. **Break và Continue**
   - `break`: thoát khỏi vòng lặp
   - `continue`: bỏ qua phần còn lại của lần lặp hiện tại

2. **Vô cực và hiệu năng**
   - Luôn đảm bảo điều kiện dừng rõ ràng
   - Tránh vòng lặp vô tận
   - Cân nhắc hiệu năng khi lặp với số lượng lớn

3. **Lựa chọn cấu trúc phù hợp**
   - `if-else`: cho điều kiện đơn giản
   - `switch`: khi so sánh một biến với nhiều giá trị
   - `for`: khi biết số lần lặp
   - `while`: khi không biết trước số lần lặp

## Ví dụ thực tế

```java
// Kiểm tra số nguyên tố
public static boolean isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}
```

## Kết luận

Cấu trúc điều khiển là công cụ cơ bản nhưng mạnh mẽ trong lập trình. Nắm vững và sử dụng đúng các cấu trúc này sẽ giúp code của bạn:
- Hiệu quả và tối ưu
- Dễ đọc và bảo trì
- Tránh được các lỗi logic phổ biến

> Bài viết bởi Huỳnh Anh Khoa — Sinh viên HUTECH, chuyên ngành An ninh mạng