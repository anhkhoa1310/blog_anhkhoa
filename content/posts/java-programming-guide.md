---
title: "Lập trình Java từ cơ bản đến nâng cao"
date: "2025-10-02"
excerpt: "Hướng dẫn toàn diện về ngôn ngữ lập trình Java: từ cú pháp cơ bản đến lập trình hướng đối tượng, xử lý ngoại lệ và các framework phổ biến."
category: "Lập trình Java"
tags: ["Java", "OOP", "Spring Boot", "Java Core", "Backend"]
author: "Huỳnh Anh Khoa"
---

# Lập trình Java từ cơ bản đến nâng cao

Java là một trong những ngôn ngữ lập trình phổ biến nhất thế giới, đặc biệt trong phát triển ứng dụng doanh nghiệp và Android. Bài viết này sẽ giới thiệu tổng quan về Java và các khái niệm quan trọng.

## 1. Giới thiệu về Java

### Đặc điểm của Java
- **Write Once, Run Anywhere**: Chạy trên mọi nền tảng
- **Object-Oriented**: Lập trình hướng đối tượng
- **Strong Type-Safety**: Kiểm tra kiểu dữ liệu nghiêm ngặt
- **Automatic Memory Management**: Tự động quản lý bộ nhớ

### Môi trường phát triển
```bash
# Cài đặt JDK
# Windows: Tải từ Oracle hoặc OpenJDK
# Linux:
sudo apt install openjdk-17-jdk

# Kiểm tra phiên bản
java -version
javac -version
```

## 2. Cú pháp cơ bản

### Cấu trúc chương trình
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Kiểu dữ liệu
```java
// Kiểu nguyên thủy
int number = 10;
double price = 99.99;
boolean isValid = true;
char grade = 'A';

// Kiểu tham chiếu
String name = "Huỳnh Anh Khoa";
Integer wrappedNum = 100;
```

## 3. Lập trình hướng đối tượng

### Classes và Objects
```java
public class Student {
    // Thuộc tính
    private String name;
    private int age;
    
    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Phương thức
    public void study() {
        System.out.println(name + " đang học Java");
    }
}
```

### Kế thừa và đa hình
```java
public abstract class Animal {
    abstract void makeSound();
}

public class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Gâu gâu!");
    }
}
```

## 4. Collections Framework

### ArrayList
```java
ArrayList<String> fruits = new ArrayList<>();
fruits.add("Táo");
fruits.add("Cam");
fruits.add("Chuối");

// Duyệt danh sách
for (String fruit : fruits) {
    System.out.println(fruit);
}
```

### HashMap
```java
HashMap<String, Integer> scores = new HashMap<>();
scores.put("Java", 90);
scores.put("Python", 85);
scores.put("JavaScript", 88);

// Truy cập giá trị
System.out.println("Điểm Java: " + scores.get("Java"));
```

## 5. Xử lý ngoại lệ

```java
try {
    File file = new File("data.txt");
    Scanner scanner = new Scanner(file);
    // Xử lý file
} catch (FileNotFoundException e) {
    System.out.println("Không tìm thấy file: " + e.getMessage());
} finally {
    // Dọn dẹp tài nguyên
    scanner.close();
}
```

## 6. Java 8+ Features

### Lambda Expressions
```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.forEach(n -> System.out.println(n));
```

### Stream API
```java
List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
```

## 7. Spring Framework

### Spring Boot Example
```java
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}

@RestController
class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello Spring Boot!";
    }
}
```

## Lời khuyên cho người mới học

1. **Thực hành nhiều**: Tạo các dự án nhỏ để áp dụng kiến thức
2. **Đọc documentation**: Java có tài liệu rất chi tiết và đầy đủ
3. **Học testing**: JUnit là framework testing quan trọng trong Java
4. **Tham gia cộng đồng**: Stack Overflow, GitHub để học hỏi thêm

## Tài nguyên học tập

- [Oracle Java Documentation](https://docs.oracle.com/javase/tutorial/)
- [Spring Framework Documentation](https://spring.io/guides)
- [Baeldung Java Tutorials](https://www.baeldung.com/)
- [Java Design Patterns](https://java-design-patterns.com/)

## Kết luận

Java là ngôn ngữ mạnh mẽ với cộng đồng lớn và nhiều cơ hội việc làm. Nắm vững Java sẽ giúp bạn phát triển các ứng dụng enterprise-grade và mở ra nhiều cơ hội nghề nghiệp trong lĩnh vực backend development.

> Bài viết bởi Huỳnh Anh Khoa — Sinh viên HUTECH, chuyên ngành An ninh mạng