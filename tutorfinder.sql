CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    full_name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    ROLE VARCHAR(255),
    birthdate DATE NULL,
    phone_number VARCHAR(255) NULL,
    address VARCHAR(255) NULL,
    skills JSON NULL,
    rating FLOAT NULL,
    resume TEXT NULL,
    picture VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX user_username_index (username),
    INDEX user_email_index (email)
);

CREATE TABLE Certifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(255),
    issuing_organization VARCHAR(255),
    issue_date DATE,
    expiration_date DATE,
    link TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users (id)
);

CREATE TABLE Educations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    institution VARCHAR(255),
    degree VARCHAR(255),
    field_of_study VARCHAR(255),
    start_year INT,
    end_year INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users (id)
);

CREATE TABLE Experiences (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    position VARCHAR(255),
    company VARCHAR(255),
    start_date DATE,
    end_date DATE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users (id)
);

CREATE TABLE Sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255),
    scheduled_time DATETIME,
    description TEXT,
    skills_taught JSON,
    location VARCHAR(255),
    price DECIMAL(10, 2),
    places_limit INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users (id)
);

CREATE TABLE Enrollments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id INT,
    user_id INT,
    enrollment_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES Sessions (id),
    FOREIGN KEY (user_id) REFERENCES Users (id)
);

CREATE TABLE Feedbacks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id INT,
    user_id INT,
    rating FLOAT,
    review TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES Sessions (id),
    FOREIGN KEY (user_id) REFERENCES Users (id)
);
