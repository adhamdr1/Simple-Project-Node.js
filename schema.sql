-- 1. إنشاء جدول الأقسام (Departments)
-- بدأنا بيه عشان جدول الموظفين هيعتمد عليه
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,       -- id بيزيد لوحده تلقائياً
    name VARCHAR(100) NOT NULL,  -- اسم القسم
    location VARCHAR(100)        -- مكان القسم (اختياري)
);

-- 2. إنشاء جدول الموظفين (Employees)
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,   -- الإيميل لازم ميتكررش
    position VARCHAR(50),
    salary DECIMAL(10, 2),       -- المرتب (رقم عشري)
    department_id INTEGER,       -- ده الـ Foreign Key
    
    -- هنا بنربط عمود department_id بجدول departments
    CONSTRAINT fk_department
      FOREIGN KEY(department_id) 
      REFERENCES departments(id)
      ON DELETE SET NULL         -- لو القسم اتمسح، الموظف يفضل موجود بس القسم يبقى NULL
);

-- 3. إدخال بيانات في جدول الأقسام (Seeding Departments)
INSERT INTO departments (name, location) VALUES 
('Engineering', 'Building A'),
('HR', 'Building B'),
('Sales', 'Building C');

-- 4. إدخال بيانات في جدول الموظفين (Seeding Employees)
-- لاحظ إننا بنستخدم أرقام الأقسام اللي لسه ضايفينها فوق (1, 2, 3)
INSERT INTO employees (name, email, position, salary, department_id) VALUES 
('Ahmed Ali', 'ahmed@example.com', 'Backend Developer', 15000.00, 1), -- تبع Engineering
('Sara Mohamed', 'sara@example.com', 'Frontend Developer', 14000.00, 1), -- تبع Engineering
('Khaled Omar', 'khaled@example.com', 'HR Specialist', 9000.00, 2),     -- تبع HR
('Mona Youssef', 'mona@example.com', 'Sales Manager', 12000.00, 3);    -- تبع Sales

-- 5. جملة استعلام بسيطة عشان تتأكد إن كله تمام (اختياري)
SELECT * FROM employees;


SELECT * FROM departments;