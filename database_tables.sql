CREATE TABLE IF NOT EXISTS accounts (
	account_id 	INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    account_role INT(1) NOT NULL,
    LRN VARCHAR(15) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(1024) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mobile int(20) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS graduates (
    graduate_id INT PRIMARY KEY AUTO_INCREMENT,
    LRN VARCHAR(15) NOT NULL UNIQUE,
    strand VARCHAR(20) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    middlename VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    birthday DATE NOT NULL,
    age INT(3) NOT NULL,
    gender VARCHAR(1) NOT NULL,
    email VARCHAR(1024) NOT NULL UNIQUE,
    mobile VARCHAR(15) NOT NULL UNIQUE,
    employment_status VARCHAR(20)  NOT NULL,
    strand_name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS reports (
    report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    report_type INT NOT NULL UNIQUE,
    report_name VARCHAR(255) NOT NULL UNIQUE
);


CREATE TABLE IF NOT EXISTS reports_graduates (
    reports_graduate_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    LRN VARCHAR(15) NOT NULL UNIQUE,
    strand VARCHAR(20) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    middlename VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    birthday DATE NOT NULL,
    age INT(3) NOT NULL,
    gender VARCHAR(1) NOT NULL,
    email VARCHAR(1024) NOT NULL UNIQUE,
    mobile VARCHAR(15) NOT NULL UNIQUE,
    employment_status VARCHAR(20)  NOT NULL
);


CREATE TABLE IF NOT EXISTS job_offers (
    job_offer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    strand VARCHAR(20) NOT NULL,
    job VARCHAR(255) NOT NULL,
    company VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    job_description  TEXT NOT NULL,
    job_qualification TEXT NOT NULL,
    job_posted DATE NOT NULL,
    job_availability DATE NOT NULL
);


CREATE TABLE IF NOT EXISTS scholarship (
    scholarship_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    school VARCHAR(255) NOT NULL,
    descriptions TEXT NOT NULL,
    requirements TEXT NOT NULL,
    grade INT(3) NOT NULL,
    website VARCHAR(200) NOT NULL
);