---
title: "React Hooks - Cách viết React hiện đại"
date: "2025-10-15"
excerpt: "Khám phá React Hooks - cách viết React component hiện đại với useState, useEffect, useContext và custom hooks."
category: "JavaScript"
tags: ["React", "Hooks", "Frontend", "JavaScript"]
author: "Huỳnh Anh Khoa"
---

# React Hooks - Cách viết React hiện đại

React Hooks là một tính năng mạnh mẽ được giới thiệu trong React 16.8, cho phép chúng ta sử dụng state và lifecycle methods trong functional components. Trong bài viết này, chúng ta sẽ tìm hiểu cách sử dụng các hooks phổ biến nhất.

## Tại sao cần React Hooks?

Trước khi có Hooks, chúng ta phải sử dụng class components để quản lý state:

```javascript
// Class Component (cách cũ)
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

Với Hooks, chúng ta có thể viết ngắn gọn hơn:

```javascript
// Functional Component với Hooks
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

## useState - Quản lý State

`useState` là hook cơ bản nhất để quản lý state trong functional components.

### Sử dụng cơ bản

```javascript
import React, { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState('Huỳnh Anh Khoa');
  const [age, setAge] = useState(20);
  const [isStudent, setIsStudent] = useState(true);

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Tên: {name}</p>
      <p>Tuổi: {age}</p>
      <p>Là sinh viên: {isStudent ? 'Có' : 'Không'}</p>
      
      <button onClick={() => setName('Nguyễn Văn A')}>
        Đổi tên
      </button>
      <button onClick={() => setAge(age + 1)}>
        Tăng tuổi
      </button>
      <button onClick={() => setIsStudent(!isStudent)}>
        Toggle sinh viên
      </button>
    </div>
  );
}
```

### State với Object

```javascript
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const handleInputChange = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Tên"
        value={user.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
      />
      <input
        type="number"
        placeholder="Tuổi"
        value={user.age}
        onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
      />
    </form>
  );
}
```

## useEffect - Side Effects

`useEffect` thay thế cho `componentDidMount`, `componentDidUpdate`, và `componentWillUnmount`.

### Sử dụng cơ bản

```javascript
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ComponentDidMount + ComponentDidUpdate
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/posts');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Dependency array rỗng = chỉ chạy 1 lần

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error}</div>;
  if (!data) return <div>Không có dữ liệu</div>;

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      {data.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
```

### Cleanup Function

```javascript
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Thời gian: {seconds} giây</div>;
}
```

### Dependency Array

```javascript
function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Chạy lại khi userId thay đổi
    fetchUserPosts(userId).then(setPosts);
  }, [userId]); // Dependency: userId

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

## useContext - Context API

`useContext` giúp chia sẻ data giữa các components mà không cần prop drilling.

### Tạo Context

```javascript
// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{
      user,
      isLoggedIn,
      login,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
```

### Sử dụng Context

```javascript
// App.js
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <Header />
      <Main />
    </UserProvider>
  );
}

// Header.js
import { useUser } from './UserContext';

function Header() {
  const { user, isLoggedIn, logout } = useUser();

  return (
    <header>
      {isLoggedIn ? (
        <div>
          <span>Xin chào, {user.name}!</span>
          <button onClick={logout}>Đăng xuất</button>
        </div>
      ) : (
        <span>Vui lòng đăng nhập</span>
      )}
    </header>
  );
}
```

## useReducer - State Management phức tạp

`useReducer` phù hợp cho state phức tạp với nhiều actions.

```javascript
import React, { useReducer } from 'react';

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Date.now(),
        text: action.text,
        completed: false
      }];
    
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', text: inputValue });
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', id });
  };

  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Thêm todo mới..."
        />
        <button onClick={addTodo}>Thêm</button>
      </div>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## Custom Hooks

Custom hooks giúp tái sử dụng logic giữa các components.

### useLocalStorage Hook

```javascript
// useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
```

### useApi Hook

```javascript
// useApi.js
import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useApi;
```

### Sử dụng Custom Hooks

```javascript
// App.js
import useLocalStorage from './useLocalStorage';
import useApi from './useApi';

function App() {
  const [name, setName] = useLocalStorage('name', '');
  const { data: posts, loading, error } = useApi('/api/posts');

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên của bạn"
      />
      
      {loading && <div>Đang tải...</div>}
      {error && <div>Lỗi: {error}</div>}
      {posts && (
        <div>
          <h2>Bài viết</h2>
          {posts.map(post => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}
```

## Best Practices

### 1. Rules of Hooks
- Chỉ gọi hooks ở top level của function
- Không gọi hooks trong loops, conditions, hoặc nested functions

```javascript
// ❌ Sai
function BadComponent() {
  if (someCondition) {
    const [state, setState] = useState(0); // Không được!
  }
}

// ✅ Đúng
function GoodComponent() {
  const [state, setState] = useState(0);
  
  if (someCondition) {
    // Logic khác
  }
}
```

### 2. Dependency Array trong useEffect
```javascript
// ❌ Thiếu dependencies
useEffect(() => {
  fetchData(userId);
}, []); // Thiếu userId

// ✅ Đúng
useEffect(() => {
  fetchData(userId);
}, [userId]);
```

### 3. Cleanup trong useEffect
```javascript
useEffect(() => {
  const subscription = subscribe();
  
  return () => {
    subscription.unsubscribe(); // Cleanup
  };
}, []);
```

## Kết luận

React Hooks đã cách mạng hóa cách chúng ta viết React components:

- **useState**: Quản lý state đơn giản
- **useEffect**: Xử lý side effects
- **useContext**: Chia sẻ data giữa components
- **useReducer**: Quản lý state phức tạp
- **Custom Hooks**: Tái sử dụng logic

Hooks giúp code ngắn gọn, dễ hiểu và dễ test hơn. Hãy thực hành thường xuyên để thành thạo các hooks này!

---

*Bài viết được viết bởi Huỳnh Anh Khoa - Sinh viên chuyên ngành Lập trình mạng*
