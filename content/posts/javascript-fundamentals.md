---
title: "JavaScript Cơ Bản - Sức mạnh của Web"
date: "2025-09-25"
excerpt: "Tìm hiểu JavaScript từ những khái niệm cơ bản nhất. Từ biến, hàm đến DOM manipulation và async programming."
category: "JavaScript"
tags: ["JavaScript", "Web Development", "DOM", "ES6"]
author: "Huỳnh Anh Khoa"
---

# JavaScript Cơ Bản - Sức mạnh của Web

JavaScript là ngôn ngữ lập trình phổ biến nhất thế giới, được sử dụng để tạo ra các trang web tương tác và ứng dụng web hiện đại. Trong bài viết này, chúng ta sẽ khám phá những khái niệm cơ bản của JavaScript.

## JavaScript là gì?

JavaScript (JS) là ngôn ngữ lập trình:
- **Client-side**: Chạy trên trình duyệt
- **Server-side**: Node.js cho backend
- **Dynamic**: Không cần compile trước khi chạy
- **Multi-paradigm**: Hỗ trợ OOP, functional programming

## Biến và kiểu dữ liệu

### Khai báo biến
```javascript
// ES5 - var (không nên dùng)
var oldWay = "Cách cũ";

// ES6+ - let và const (khuyến nghị)
let name = "Huỳnh Anh Khoa";
const age = 20;

// Kiểu dữ liệu cơ bản
let isStudent = true;      // Boolean
let score = 95.5;         // Number
let message = "Hello";     // String
let data = null;          // Null
let notDefined;          // Undefined
```

### Kiểu dữ liệu phức tạp
```javascript
// Array
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];

// Object
let person = {
    name: "Huỳnh Anh Khoa",
    age: 20,
    isStudent: true,
    hobbies: ["coding", "reading", "gaming"]
};
```

## Hàm (Functions)

### Function Declaration

```javascript
function greet(name) {
    return `Xin chào, ${name}!`;
}

console.log(greet("Huỳnh Anh Khoa")); // "Xin chào, Huỳnh Anh Khoa!"
```

### Arrow Functions (ES6)

```javascript
const greet = (name) => {
    return `Xin chào, ${name}!`;
};

// Rút gọn hơn
const greet = name => `Xin chào, ${name}!`;

// Không tham số
const sayHello = () => console.log("Hello World!");
```

### Higher-Order Functions

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - tạo array mới
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - lọc phần tử
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce - tính tổng
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

## DOM Manipulation

### Lấy phần tử

```javascript
// Theo ID
const title = document.getElementById('title');

// Theo class
const buttons = document.getElementsByClassName('btn');

// Theo selector CSS
const firstButton = document.querySelector('.btn');
const allButtons = document.querySelectorAll('.btn');
```

### Thay đổi nội dung

```javascript
// Thay đổi text
title.textContent = "Tiêu đề mới";

// Thay đổi HTML
title.innerHTML = "<strong>Tiêu đề in đậm</strong>";

// Thay đổi thuộc tính
const image = document.querySelector('img');
image.src = "new-image.jpg";
image.alt = "Hình ảnh mới";
```

### Tạo và thêm phần tử

```javascript
// Tạo phần tử mới
const newDiv = document.createElement('div');
newDiv.textContent = "Nội dung mới";
newDiv.className = "new-class";

// Thêm vào DOM
document.body.appendChild(newDiv);

// Thêm vào vị trí cụ thể
const container = document.querySelector('.container');
container.insertBefore(newDiv, container.firstChild);
```

## Event Handling

### Event Listeners

```javascript
// Click event
const button = document.querySelector('#myButton');
button.addEventListener('click', function() {
    console.log('Button được click!');
});

// Form submission
const form = document.querySelector('#myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form submit mặc định
    console.log('Form được submit!');
});

// Keyboard events
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Phím Enter được nhấn!');
    }
});
```

## Async Programming

### Callbacks

```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = "Dữ liệu từ server";
        callback(data);
    }, 1000);
}

fetchData(function(result) {
    console.log(result); // "Dữ liệu từ server"
});
```

### Promises

```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Dữ liệu thành công");
            } else {
                reject("Lỗi khi tải dữ liệu");
            }
        }, 1000);
    });
}

// Sử dụng Promise
fetchData()
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

### Async/Await

```javascript
async function loadData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

loadData();
```

## ES6+ Features

### Destructuring

```javascript
// Array destructuring
const [first, second, third] = [1, 2, 3];

// Object destructuring
const person = { name: "Huỳnh Anh Khoa", age: 20 };
const { name, age } = person;
```

### Template Literals

```javascript
const name = "Huỳnh Anh Khoa";
const age = 20;

// Cách cũ
const message = "Xin chào, tôi là " + name + ", " + age + " tuổi";

// ES6+
const message = `Xin chào, tôi là ${name}, ${age} tuổi`;
```

### Spread Operator

```javascript
// Array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
```

## Modules

### Export

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export
export default class Calculator {
    multiply(a, b) {
        return a * b;
    }
}
```

### Import

```javascript
// main.js
import Calculator, { add, subtract } from './math.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2

const calc = new Calculator();
console.log(calc.multiply(4, 5)); // 20
```

## Best Practices

### 1. Sử dụng const và let thay vì var
```javascript
// ❌ Không nên
var name = "Huỳnh Anh Khoa";

// ✅ Nên dùng
const name = "Huỳnh Anh Khoa";
let age = 20;
```

### 2. Sử dụng arrow functions khi có thể
```javascript
// ❌ Không nên
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
});

// ✅ Nên dùng
const doubled = numbers.map(num => num * 2);
```

### 3. Sử dụng template literals
```javascript
// ❌ Không nên
const message = "Xin chào " + name + ", bạn " + age + " tuổi";

// ✅ Nên dùng
const message = `Xin chào ${name}, bạn ${age} tuổi`;
```

## Kết luận

JavaScript là một ngôn ngữ linh hoạt và mạnh mẽ. Những khái niệm cơ bản trên sẽ giúp bạn:

- Hiểu cách JavaScript hoạt động
- Viết code sạch và hiệu quả
- Sử dụng các tính năng hiện đại của ES6+
- Chuẩn bị cho việc học các framework như React, Vue, Angular

Hãy thực hành thường xuyên và xây dựng các dự án thực tế để nâng cao kỹ năng!

---

*Bài viết được viết bởi Huỳnh Anh Khoa - Sinh viên chuyên ngành Lập trình mạng*
