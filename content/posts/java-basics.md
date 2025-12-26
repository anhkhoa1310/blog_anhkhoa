---
title: "Java Cơ Bản - Từ Zero đến Hero"
date: "2025-09-16"
excerpt: "Khám phá những khái niệm cơ bản nhất của Java, từ cú pháp đến OOP. Bài viết dành cho người mới bắt đầu học lập trình Java."
category: "Java"
tags: ["Java", "OOP", "Cơ bản", "Lập trình"]
author: "Huỳnh Anh Khoa"
---

# Java Cơ Bản - Từ Zero đến Hero

Java là một trong những ngôn ngữ lập trình phổ biến nhất thế giới, được sử dụng rộng rãi trong phát triển ứng dụng web, mobile và enterprise. Trong bài viết này, chúng ta sẽ cùng tìm hiểu những khái niệm cơ bản nhất của Java.

## Tại sao nên học Java?

Java có nhiều ưu điểm khiến nó trở thành lựa chọn hàng đầu:

- **Đa nền tảng**: "Write once, run anywhere" - viết một lần, chạy mọi nơi
- **Cộng đồng lớn**: Hỗ trợ từ cộng đồng developer khổng lồ
- **Thư viện phong phú**: Nhiều framework và library mạnh mẽ
- **Bảo mật cao**: Được thiết kế với tính bảo mật cao
- **Hiệu suất tốt**: JVM tối ưu hóa hiệu suất

## Cú pháp cơ bản

### Khai báo biến

```java
// Khai báo biến
int age = 25;
String name = "Huỳnh Anh Khoa";
double salary = 50000.0;
boolean isStudent = true;
```

### Cấu trúc điều khiển

```java
// If-else
if (age >= 18) {
    System.out.println("Đã trưởng thành");
} else {
    System.out.println("Chưa trưởng thành");
}

// Vòng lặp for
for (int i = 0; i < 5; i++) {
    System.out.println("Số: " + i);
}

// Vòng lặp while
int count = 0;
while (count < 3) {
    System.out.println("Count: " + count);
    count++;
}
```

## Lập trình hướng đối tượng (OOP)

Java là ngôn ngữ hướng đối tượng thuần túy. Dưới đây là ví dụ về class cơ bản:

```java
public class Student {
    // Thuộc tính (Attributes)
    private String name;
    private int age;
    private String major;
    
    // Constructor
    public Student(String name, int age, String major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
    
    // Phương thức (Methods)
    public void study() {
        System.out.println(name + " đang học " + major);
    }
    
    public void introduce() {
        System.out.println("Xin chào, tôi là " + name + 
                          ", " + age + " tuổi, chuyên ngành " + major);
    }
    
    // Getter và Setter
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}
```

## Sử dụng class

```java
public class Main {
    public static void main(String[] args) {
        // Tạo đối tượng
        Student student1 = new Student("Nguyễn Văn A", 20, "Khoa học máy tính");
        Student student2 = new Student("Trần Thị B", 19, "Công nghệ thông tin");
        
        // Gọi phương thức
        student1.introduce();
        student1.study();
        
        student2.introduce();
        student2.study();
    }
}
```

## Các khái niệm OOP quan trọng

### 1. Encapsulation (Đóng gói)
- Ẩn dấu thông tin bên trong class
- Sử dụng access modifiers: `private`, `public`, `protected`

### 2. Inheritance (Kế thừa)
```java
public class Person {
    protected String name;
    protected int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void introduce() {
        System.out.println("Tôi là " + name);
    }
}

public class Student extends Person {
    private String major;
    
    public Student(String name, int age, String major) {
        super(name, age);
        this.major = major;
    }
    
    @Override
    public void introduce() {
        super.introduce();
        System.out.println("Tôi là sinh viên ngành " + major);
    }
}
```

### 3. Polymorphism (Đa hình)
```java
Person person1 = new Person("A", 25);
Person person2 = new Student("B", 20, "IT");

person1.introduce(); // "Tôi là A"
person2.introduce(); // "Tôi là B" + "Tôi là sinh viên ngành IT"
```

## Collections Framework

Java cung cấp các cấu trúc dữ liệu mạnh mẽ:

```java
import java.util.*;

// ArrayList
List<String> names = new ArrayList<>();
names.add("Huỳnh Anh Khoa");
names.add("Nguyễn Văn A");
names.add("Trần Thị B");

// HashMap
Map<String, Integer> ages = new HashMap<>();
ages.put("Huỳnh Anh Khoa", 20);
ages.put("Nguyễn Văn A", 22);

// HashSet
Set<String> uniqueNames = new HashSet<>();
uniqueNames.add("Java");
uniqueNames.add("Python");
uniqueNames.add("JavaScript");
```

## Exception Handling

Xử lý lỗi là phần quan trọng trong Java:

```java
public class Calculator {
    public static double divide(int a, int b) {
        try {
            if (b == 0) {
                throw new IllegalArgumentException("Không thể chia cho 0");
            }
            return (double) a / b;
        } catch (IllegalArgumentException e) {
            System.err.println("Lỗi: " + e.getMessage());
            return 0;
        }
    }
}
```

## Kết luận

Java là một ngôn ngữ mạnh mẽ và linh hoạt. Những khái niệm cơ bản trên sẽ giúp bạn có nền tảng vững chắc để tiếp tục học các chủ đề nâng cao hơn như:

- Spring Framework
- Hibernate/JPA
- Spring Boot
- Microservices
- Design Patterns

Hãy thực hành thường xuyên và xây dựng các dự án nhỏ để củng cố kiến thức. Chúc bạn học tập hiệu quả!

---

*Bài viết được viết bởi Huỳnh Anh Khoa - Sinh viên chuyên ngành Lập trình mạng*
