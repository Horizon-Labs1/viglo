# Lib Folder Information

## Overview
The `lib` folder contains utility functions and helper methods that support the application's core logic. These utilities are designed to be **modular, reusable, and efficient**, helping to streamline various operations throughout the project.

## Folder Structure
```
/lib
│── util.tsx    # Collection of utility functions used across the application
```

---

## File Descriptions

### **1. util.tsx**
- Contains **helper functions** that simplify common operations.
- Includes functions for **data formatting, validation, API handling, and general utilities**.
- Helps in maintaining **cleaner and more maintainable code** by keeping reusable logic separate from components.

**Example Utility Functions in `util.tsx`:**

#### **Data Formatting Helpers**
```tsx
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
```

#### **Number Formatting**
```tsx
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
```

#### **API Request Handler**
```tsx
export async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}
```

#### **Validation Helpers**
```tsx
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
```

---

## Best Practices
- **Keep utility functions pure and reusable** – Avoid side effects where possible.
- **Group similar functions together** – Organize utilities based on their purpose (e.g., formatting, validation, API handling).
- **Use TypeScript for type safety** – Define clear function signatures.
- **Keep functions small and focused** – A function should do **one thing well**.

## Contribution
If modifying or adding utilities:
- Ensure they are **well-documented and reusable**.
- Follow **TypeScript best practices** for function typing.
- Include **error handling** where necessary.

📢 **For any new utility functions, consult the development team to maintain consistency.**

