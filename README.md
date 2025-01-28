## Introduction

A **Library Management System (LMS)** is a comprehensive software solution designed to simplify and optimize the day-to-day operations of libraries. Its primary purpose is to assist librarians and library members in managing various aspects of library activities, such as book inventory, user memberships, and book transactions.

By focusing on essential features, an LMS ensures a user-friendly experience, quick setup, and efficient functionality for all stakeholders.

## Core Features

### **1. Book Management**

This feature enables librarians to effectively manage the library's collection of books. It includes functionalities such as:

- Adding new books to the inventory.
- Removing books that are no longer available.
- Searching for books based on specific criteria like title, author, or ISBN.
- Tracking the availability of books in real time, ensuring members can easily find what they need.

### **2. User Management**

The system facilitates the management of two distinct user types: **Librarian** and **Member**. Key functionalities include:

- Registering new users and maintaining their profiles.
- Managing borrowing privileges, such as setting limits on the number of books a member can borrow.
- Ensuring secure access through authentication mechanisms.

### **3. Borrowing and Returning**

The borrowing and returning feature streamlines book transactions by:

- Allowing librarians to issue books to members.
- Recording the return of borrowed books.
- Tracking due dates to ensure timely returns and minimize overdue instances.

### **4. Fines**

The system automatically calculates fines for overdue books to encourage timely returns. Key functionalities include:

- Tracking overdue books and applying monetary penalties.
- Maintaining a record of fine payments.
- Displaying the payment status to both librarians and members.

## Key Objects

The following objects represent the core components of the Library Management System:

### **1. Book**

Each book in the library is represented by a set of attributes that provide detailed information about it:

| **Attribute** | **Description** |
| --- | --- |
| **Title** | The title or name of the book. |
| **Author** | The author(s) who wrote the book. |
| **Resume** | A brief summary or description of the book's content. |
| **Cover** | The cover image of the book, providing a visual representation. |
| **Copies Available** | The number of copies of the book currently available for borrowing. |
| **ISBN** | A unique identifier assigned to the book for cataloging and tracking. |

### **2. User**

Users are individuals interacting with the library system. Their attributes include:

| **Attribute** | **Description** |
| --- | --- |
| **Username** | The unique name used by the user to log in or identify themselves. |
| **Password** | A secure credential required for user authentication. |
| **Email** | The user's email address for communication purposes. |
| **Phone** | The user's contact number for further communication or verification. |

### **3. Member**

Members are users who borrow books from the library. They have additional attributes:

| **Attribute** | **Description** |
| --- | --- |
| **Full Name** | The member's complete name. |
| **Borrowed Books** | A list of books currently borrowed by the member, with a limit of three. |

### **4. Librarian**

Librarians are users with administrative responsibilities within the library system. Their attributes include:

| **Attribute** | **Description** |
| --- | --- |
| **Full Name** | The librarian's complete name. |
| **Role** | A description of the librarian's duties, such as managing books and transactions. |

### **5. Transaction**

A transaction records the details of borrowing or returning a book. The attributes include:

| **Attribute** | **Description** |
| --- | --- |
| **Book ID** | The unique identifier of the borrowed book. |
| **Member ID** | The unique identifier of the member involved in the transaction. |
| **Issue Date** | The date when the book was borrowed. |
| **Due Date** | The date by which the book must be returned. |

### **6. Fine**

Fines are applied to members for overdue books. The attributes include:

| **Attribute** | **Description** |
| --- | --- |
| **Member ID** | The unique identifier of the member who incurred the fine. |
| **Amount** | The monetary penalty imposed for overdue books. |
| **Payment Status** | Indicates whether the fine has been paid or is still pending. |

### **7. Catalog**

The catalog is a comprehensive record of the library's collection, enabling users to browse available books and their details. Attributes include:

| **Attribute** | **Description** |
| --- | --- |
| **Book ID** | The unique identifier of each book in the library. |
| **Title** | The title or name of the book. |
| **Author** | The author(s) of the book. |
| **Copies Available** | The number of copies currently available for borrowing. |

![image.png](attachment:eb4b83ae-7d13-4880-bf54-59ff9f33f81d:image.png)
