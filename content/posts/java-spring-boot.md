---
title: "Spring Boot - Xây dựng REST API chuyên nghiệp"
date: "2025-09-15"
excerpt: "Học cách sử dụng Spring Boot để xây dựng REST API mạnh mẽ. Từ cấu hình cơ bản đến database integration và security."
category: "Java"
tags: ["Spring Boot", "REST API", "Java", "Backend"]
author: "Huỳnh Anh Khoa"
---

# Spring Boot - Xây dựng REST API chuyên nghiệp

Spring Boot là framework phổ biến nhất trong hệ sinh thái Java, giúp phát triển ứng dụng web và microservices một cách nhanh chóng và hiệu quả. Trong bài viết này, chúng ta sẽ tìm hiểu cách xây dựng REST API với Spring Boot.

## Spring Boot là gì?

Spring Boot là một framework Java được xây dựng trên Spring Framework, cung cấp:

- **Auto-configuration**: Tự động cấu hình dựa trên dependencies
- **Starter dependencies**: Gói các dependencies phổ biến
- **Embedded server**: Tích hợp Tomcat, Jetty
- **Production-ready**: Monitoring, metrics, health checks

## Tạo dự án Spring Boot

### Sử dụng Spring Initializr

1. Truy cập [start.spring.io](https://start.spring.io)
2. Chọn các dependencies:
   - Spring Web
   - Spring Data JPA
   - H2 Database
   - Spring Boot DevTools
   - Validation

### Cấu trúc dự án

```
src/
├── main/
│   ├── java/
│   │   └── com/example/blog/
│   │       ├── BlogApplication.java
│   │       ├── controller/
│   │       ├── model/
│   │       ├── repository/
│   │       └── service/
│   └── resources/
│       ├── application.properties
│       └── static/
└── test/
```

## Tạo Model (Entity)

```java
@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String content;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // Constructors
    public Post() {}
    
    public Post(String title, String content) {
        this.title = title;
        this.content = content;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
```

## Repository Layer

```java
@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    
    // Tìm bài viết theo tiêu đề
    List<Post> findByTitleContainingIgnoreCase(String title);
    
    // Tìm bài viết theo ngày tạo
    List<Post> findByCreatedAtBetween(LocalDateTime start, LocalDateTime end);
    
    // Tìm bài viết mới nhất
    List<Post> findTop10ByOrderByCreatedAtDesc();
    
    // Đếm số bài viết
    @Query("SELECT COUNT(p) FROM Post p")
    long countAllPosts();
}
```

## Service Layer

```java
@Service
@Transactional
public class PostService {
    
    @Autowired
    private PostRepository postRepository;
    
    // Lấy tất cả bài viết
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }
    
    // Lấy bài viết theo ID
    public Post getPostById(Long id) {
        return postRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Không tìm thấy bài viết với ID: " + id));
    }
    
    // Tạo bài viết mới
    public Post createPost(Post post) {
        post.setCreatedAt(LocalDateTime.now());
        post.setUpdatedAt(LocalDateTime.now());
        return postRepository.save(post);
    }
    
    // Cập nhật bài viết
    public Post updatePost(Long id, Post postDetails) {
        Post post = getPostById(id);
        post.setTitle(postDetails.getTitle());
        post.setContent(postDetails.getContent());
        post.setUpdatedAt(LocalDateTime.now());
        return postRepository.save(post);
    }
    
    // Xóa bài viết
    public void deletePost(Long id) {
        Post post = getPostById(id);
        postRepository.delete(post);
    }
    
    // Tìm kiếm bài viết
    public List<Post> searchPosts(String keyword) {
        return postRepository.findByTitleContainingIgnoreCase(keyword);
    }
}
```

## Controller Layer (REST API)

```java
@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class PostController {
    
    @Autowired
    private PostService postService;
    
    // GET /api/posts - Lấy tất cả bài viết
    @GetMapping
    public ResponseEntity<List<Post>> getAllPosts() {
        List<Post> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }
    
    // GET /api/posts/{id} - Lấy bài viết theo ID
    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id) {
        try {
            Post post = postService.getPostById(id);
            return ResponseEntity.ok(post);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    // POST /api/posts - Tạo bài viết mới
    @PostMapping
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
        Post createdPost = postService.createPost(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
    }
    
    // PUT /api/posts/{id} - Cập nhật bài viết
    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Long id, @RequestBody Post postDetails) {
        try {
            Post updatedPost = postService.updatePost(id, postDetails);
            return ResponseEntity.ok(updatedPost);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    // DELETE /api/posts/{id} - Xóa bài viết
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        try {
            postService.deletePost(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    // GET /api/posts/search?keyword=... - Tìm kiếm bài viết
    @GetMapping("/search")
    public ResponseEntity<List<Post>> searchPosts(@RequestParam String keyword) {
        List<Post> posts = postService.searchPosts(keyword);
        return ResponseEntity.ok(posts);
    }
}
```

## Cấu hình Database

### application.properties

```properties
# Database Configuration
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# JPA Configuration
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true

# H2 Console (chỉ dùng cho development)
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

# Server Configuration
server.port=8080
```

## Validation và Error Handling

### DTO với Validation

```java
public class PostDTO {
    @NotBlank(message = "Tiêu đề không được để trống")
    @Size(min = 5, max = 100, message = "Tiêu đề phải từ 5-100 ký tự")
    private String title;
    
    @NotBlank(message = "Nội dung không được để trống")
    @Size(min = 10, message = "Nội dung phải ít nhất 10 ký tự")
    private String content;
    
    // Constructors, getters, setters
}
```

### Global Exception Handler

```java
@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return ResponseEntity.badRequest().body(errors);
    }
    
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handleRuntimeException(RuntimeException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
}
```

## Testing

### Unit Test cho Service

```java
@ExtendWith(MockitoExtension.class)
class PostServiceTest {
    
    @Mock
    private PostRepository postRepository;
    
    @InjectMocks
    private PostService postService;
    
    @Test
    void testCreatePost() {
        // Given
        Post post = new Post("Test Title", "Test Content");
        when(postRepository.save(any(Post.class))).thenReturn(post);
        
        // When
        Post result = postService.createPost(post);
        
        // Then
        assertThat(result.getTitle()).isEqualTo("Test Title");
        assertThat(result.getContent()).isEqualTo("Test Content");
        verify(postRepository).save(post);
    }
}
```

### Integration Test

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class PostControllerIntegrationTest {
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Test
    void testCreatePost() {
        Post post = new Post("Test Title", "Test Content");
        
        ResponseEntity<Post> response = restTemplate.postForEntity(
            "/api/posts", post, Post.class);
        
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody().getTitle()).isEqualTo("Test Title");
    }
}
```

## Security với Spring Security

### Cấu hình Security

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/posts/**").permitAll()
                .requestMatchers("/h2-console/**").permitAll()
                .anyRequest().authenticated()
            )
            .headers().frameOptions().disable();
        
        return http.build();
    }
}
```

## Deployment

### Dockerfile

```dockerfile
FROM openjdk:17-jdk-slim
VOLUME /tmp
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
```

### docker-compose.yml

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=prod
    depends_on:
      - db
      
  db:
    image: postgres:13
    environment:
      POSTGRES_DB: blogdb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
```

## Kết luận

Spring Boot giúp chúng ta xây dựng REST API một cách nhanh chóng và hiệu quả. Những kiến thức trên bao gồm:

- Cấu trúc dự án Spring Boot
- Entity và Repository pattern
- Service layer và business logic
- REST Controller và API endpoints
- Validation và error handling
- Testing strategies
- Security configuration
- Deployment với Docker

Tiếp theo, bạn có thể học thêm về:
- Spring Security nâng cao
- Microservices với Spring Cloud
- Message queues với RabbitMQ/Kafka
- Monitoring với Actuator và Micrometer

---

*Bài viết được viết bởi Huỳnh Anh Khoa - Sinh viên chuyên ngành Lập trình mạng*
