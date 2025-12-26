---
title: "Biến, Kiểu dữ liệu và Toán tử — Hướng dẫn cơ bản"
date: "2025-09-30"
excerpt: "Giới thiệu các khái niệm nền tảng: biến, kiểu dữ liệu và toán tử, kèm ví dụ minh họa bằng Java và JavaScript."
category: "Lập trình cơ bản"
tags: ["Java", "JavaScript", "Biến", "Kiểu dữ liệu", "Toán tử"]
author: "Huỳnh Anh Khoa"
---

# Biến, Kiểu dữ liệu và Toán tử

Khi bắt đầu học lập trình, ba khái niệm nền tảng bạn cần nắm là **biến**, **kiểu dữ liệu** và **toán tử**. Bài viết này giải thích ngắn gọn ý nghĩa từng khái niệm và cung cấp ví dụ đơn giản bằng Java và JavaScript.

## Biến là gì?

Biến là tên gọi đại diện cho một vùng nhớ dùng để lưu trữ giá trị trong chương trình. Biến có thể thay đổi giá trị trong quá trình chạy chương trình (tùy loại và cách khai báo).

Ví dụ khai báo biến:

### Java

```java
int age = 20;
String name = "Vương";
double height = 1.75;
```

### JavaScript

```javascript
let age = 20;
let name = "Vương";
let height = 1.75;
```

## Các kiểu dữ liệu cơ bản

Các ngôn ngữ có thể khác nhau về tên kiểu dữ liệu, nhưng khái quát thường bao gồm:

- Số nguyên (Integer / number)
- Số thực (Float / double / number)
- Chuỗi (String)
- Ký tự (char — trong Java)
- Boolean (true / false)

Ví dụ:

- Java: `int`, `double`, `String`, `char`, `boolean`
- JavaScript: `number`, `string`, `boolean`, `object`, `undefined`, `null`

## Toán tử cơ bản

Toán tử được dùng để thao tác với giá trị. Một số nhóm toán tử phổ biến:

- Toán tử số học: `+`, `-`, `*`, `/`, `%`
- Toán tử gán: `=`, `+=`, `-=`
- Toán tử so sánh: `==`, `!=`, `>`, `<`, `>=`, `<=` (chú ý khác biệt `==` và `===` trong JavaScript)
- Toán tử logic: `&&`, `||`, `!`

## Ví dụ minh họa

### Java — Phép cộng hai số nguyên

```java
int a = 10;
int b = 5;
int sum = a + b;
System.out.println("Tổng là: " + sum); // Kết quả: Tổng là: 15
```

### JavaScript — Phép cộng hai số

```javascript
let a = 10;
let b = 5;
let sum = a + b;
console.log("Tổng là: " + sum); // Kết quả: Tổng là: 15
```

## Các lưu ý và mẹo nhỏ

- Trong Java, kiểu dữ liệu cố định (static typing) yêu cầu bạn khai báo kiểu khi định nghĩa biến. Trong JavaScript, kiểu dữ liệu linh hoạt (dynamic typing).
- Tránh sử dụng `==` trong JavaScript nếu bạn cần so sánh chặt chẽ; dùng `===` để tránh các chuyển đổi kiểu bất ngờ.
- Kiểm tra giới hạn kiểu số khi làm việc với số lớn hoặc số thập phân (ví dụ `double` trong Java, lưu ý về precision trong JavaScript).

## Kết luận

Nắm vững biến, kiểu dữ liệu và toán tử giúp bạn xây dựng nền tảng vững chắc để học tiếp các chủ đề phức tạp hơn như cấu trúc dữ liệu, lập trình hướng đối tượng và xử lý bất đồng bộ. Bắt đầu bằng những ví dụ nhỏ, viết và chạy mã thường xuyên sẽ giúp bạn tiến bộ nhanh hơn.

> Bài viết bởi Huỳnh Anh Khoa — Sinh viên HUTECH, chuyên ngành An ninh mạng