---
title: "Ứng dụng mini — Máy tính đơn giản (Cộng, Trừ, Nhân, Chia)"
date: "2025-10-02"
excerpt: "Hướng dẫn xây dựng một ứng dụng máy tính đơn giản để thực hành biến, toán tử, điều kiện và hàm với ví dụ Java và JavaScript."
category: "Lập trình cơ bản"
tags: ["Java", "JavaScript", "Mini App", "Calculator"]
author: "Huỳnh Anh Khoa"
---

# Ứng dụng mini — Máy tính đơn giản

Mục tiêu của bài này là xây dựng một chương trình máy tính đơn giản hỗ trợ các phép toán cơ bản: cộng, trừ, nhân và chia. Đây là bài tập tốt để tổng hợp các kiến thức về biến, toán tử, điều kiện và nhập/xuất dữ liệu.

## Yêu cầu

- Nhập hai số (số thực).
- Chọn phép toán: `+`, `-`, `*`, `/`.
- Hiển thị kết quả. Xử lý trường hợp chia cho 0.

## Ví dụ — Java (console)

Đoạn mã sau minh họa một ứng dụng console đơn giản bằng Java. Chương trình đọc hai số và ký tự phép toán từ người dùng, thực hiện phép tính và in kết quả.

```java
import java.util.Scanner;

public class Calculator {
        public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);

                System.out.print("Nhập số a: ");
                double a = sc.nextDouble();

                System.out.print("Nhập số b: ");
                double b = sc.nextDouble();

                System.out.print("Chọn phép tính (+ - * /): ");
                char op = sc.next().charAt(0);

                double result;
                switch (op) {
                        case '+': result = a + b; break;
                        case '-': result = a - b; break;
                        case '*': result = a * b; break;
                        case '/':
                                if (b == 0) {
                                        System.out.println("Lỗi: Không thể chia cho 0.");
                                        sc.close();
                                        return;
                                }
                                result = a / b;
                                break;
                        default:
                                System.out.println("Phép toán không hợp lệ.");
                                sc.close();
                                return;
                }

                System.out.println("Kết quả: " + result);
                sc.close();
        }
}
```

## Ví dụ — JavaScript (trình duyệt)

Đây là phiên bản đơn giản dùng `prompt`/`alert` trong trình duyệt. Trong ứng dụng thực tế, bạn sẽ dùng form HTML và xử lý sự kiện.

```javascript
const a = parseFloat(prompt("Nhập số a:"));
const b = parseFloat(prompt("Nhập số b:"));
const op = prompt("Chọn phép tính (+ - * /):");

let result;
if (op === "+") result = a + b;
else if (op === "-") result = a - b;
else if (op === "*") result = a * b;
else if (op === "/") {
    if (b === 0) {
        alert("Lỗi: Không thể chia cho 0.");
    } else {
        result = a / b;
        alert("Kết quả: " + result);
    }
} else {
    alert("Phép toán không hợp lệ.");
}
```

## Nâng cao (gợi ý bài tập tiếp theo)

- Xây dựng giao diện HTML + CSS cho máy tính (nút bấm, hiển thị kết quả).
- Hỗ trợ chuỗi phép tính (ví dụ `2 + 3 * 4`) với thứ tự ưu tiên toán tử.
- Thêm xử lý cho nhập không hợp lệ (NaN) và hiển thị thông báo người dùng.

## Kết luận

Ứng dụng máy tính đơn giản là bài tập thực tế hữu ích để luyện tập logics, thao tác chuỗi nhập/xuất và cấu trúc điều khiển. Bắt đầu từ phiên bản console, sau đó tách logic thành hàm rồi nâng cấp thành một ứng dụng web sẽ giúp bạn tiến bộ nhanh.

> Bài viết bởi Huỳnh Anh Khoa — Sinh viên HUTECH, chuyên ngành An ninh mạng