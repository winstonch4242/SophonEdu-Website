CREATE TABLE [dbo].[LearnersData] (
    [LearnerID]    INT              IDENTITY (1, 1) NOT NULL,
    [FirstName]    NVARCHAR (50)    NOT NULL,
    [LastName]     NVARCHAR (50)    NOT NULL,
    [Age]          INT              NOT NULL,
    [Gender]       NVARCHAR (10)    NOT NULL,
    [LevelOfStudy] NVARCHAR (50)    NOT NULL,
    [EmailAddress] NVARCHAR (100)   NOT NULL,
    [Username]     NVARCHAR (50)    NOT NULL,
    [Password]     NVARCHAR (50)    NOT NULL,
    PRIMARY KEY CLUSTERED ([LearnerID] ASC)
);

CREATE TABLE [dbo].[AdminData] (
    [AdminID]      INT              IDENTITY (1, 1) NOT NULL,
    [FirstName]    NVARCHAR (50)    NOT NULL,
    [LastName]     NVARCHAR (50)    NOT NULL,
    [Age]          INT              NOT NULL,
    [EmailAddress] NVARCHAR (100)   NOT NULL,
    [Username]     NVARCHAR (50)    NOT NULL,
    [Password]     NVARCHAR (50)    NOT NULL,
    PRIMARY KEY CLUSTERED ([AdminID] ASC)
);

INSERT INTO [LearnersData] (FirstName, LastName, Age, Gender, LevelOfStudy, EmailAddress, Username, Password)
VALUES
('Mahavir', 'Gupta', 19, 'Male', 'Diploma', 'mahavir.gt@gmail.com', 'guptamaha340', 'n3SOJ9A46ZmrVTCf'),
('Jennifer', 'Yeo', 22, 'Female', 'Undergraduate', 'jenn.yeo@outlook.com', 'jenny263', 'MTjOJrI74koRUGIN'),
('Aiman', 'Rahman', 17, 'Male', 'Self-Taught', 'amrh119@proton.me', 'aiman19', 'vtzxApQOyC01IBct'),
('Rizky', 'Pratama', 18, 'Male', 'Foundation', 'rkzprt@hotmail.com', 'pratamawkwk', 'gDNMdDyNF1HHYgo5');

SELECT * FROM [LearnersData];

INSERT INTO [AdminData] (FirstName, LastName, Age, EmailAddress, Username, Password)
VALUES
('Liyana', 'Aziz', 26, 'liyana.aziz@gmail.com', 'liyaz26', 'P@ssw0rd1'),
('Marcus', 'Lee', 31, 'marcus.lee@hotmail.com', 'mlee31', 'Secure#123'),
('Nurul', 'Farid', 24, 'nurul.farid@yahoo.com', 'nfarid24', 'L!mPass22'),
('Ethan', 'Wong', 29, 'ethan.wong@outlookcom', 'ewong29', 'Arj@2024'),
('Hafiz', 'Zulkifli', 35, 'hafiz.zulkifli@proton.me', 'hzulkifli35', 'Siti#Pass9');

SELECT * FROM [AdminData];

ALTER TABLE [CoursesData] ALTER COLUMN CourseDescription NVARCHAR(2000);

INSERT INTO [CoursesData] (CourseName, TotalXP, ExpertiseLevel, CourseDescription, TotalDuration)
VALUES
('Fundamentals of Golang', 1500, 'Script Kiddie', 'Students will be introduced to the basics of Golang; they will gain a solid grasp on implementing condition flows, loops, and basic data structures in this course.', '5 Hours'),
('Cryptographic Algorithms', 3500, 'Mastering the BASICs', 'Students will be able to understand the inner workings of common cryptographic algorithms, like AES-256 and MD5, including encryption, hashing, and secure key management.', '8 Hours'),
('Working With SQL Database', 2000, 'Intermediate', 'Students will learn how to design, query, and manage relational databases using SQL, including joins, indexing, and data normalization techniques.', '7 Hours'),
('LUA for Dummies', 1500, 'Script Kiddie', 'Students will learn the fundamentals of Lua scripting, including syntax, tables, functions, and basic scripting for applications and games.', '5 Hours'),
('Data Structures & Algorithms', 2000, 'Intermediate', 'Students will explore essential data structures such as arrays, linked lists, stacks, and queues, along with fundamental algorithms for searching and sorting.', '6 Hours'),
('Operating Systems Architecture', 3500, 'Mastering the BASICs', 'Students will gain an in-depth understanding of operating system design, including memory management, process scheduling, file systems, and system calls.', '9 Hours');

SELECT * FROM [CoursesData];

ALTER TABLE LearnersData ADD Salt UNIQUEIDENTIFIER DEFAULT NEWID();
UPDATE LearnersData SET Salt = NEWID();
ALTER TABLE LearnersData ADD PasswordHash VARBINARY(64);
UPDATE LearnersData SET PasswordHash = HASHBYTES('SHA2_512', Password + CAST(Salt AS NVARCHAR(36))) WHERE PasswordHash IS NULL;
DECLARE @Password NVARCHAR(50) = 'n3SOJ9A46ZmrVTCf';
SELECT * FROM LearnersData WHERE PasswordHash = HASHBYTES('SHA2_512', @Password + CAST(Salt AS NVARCHAR(36)));

UPDATE AdminData SET Password = 'La31tx8(g@1' WHERE AdminID = 1;
UPDATE AdminData SET Password = 'Jl53a.S0=&k5' WHERE AdminID = 2;
UPDATE AdminData SET Password = '9nZ)N£q39uF' WHERE AdminID = 3;
UPDATE AdminData SET Password = '>f\A^rQ2<]31' WHERE AdminID = 4;
UPDATE AdminData SET Password = '4s6Y88X}]#([' WHERE AdminID = 5;

UPDATE AdminData SET Salt = NEWID();
ALTER TABLE AdminData ADD PasswordHash VARBINARY(64);
UPDATE AdminData SET PasswordHash = HASHBYTES('SHA2_512', Password + CAST(Salt AS NVARCHAR(36))) WHERE PasswordHash IS NULL;

CREATE TABLE [dbo].[AchievementsData] (
    [AcheivementID]          INT              IDENTITY (1, 1) NOT NULL,
    [AchievementName]        NVARCHAR (50)    NOT NULL,
    [AchievementRarity]      NVARCHAR (50)    NOT NULL,
    [XPProvided]             INT              NOT NULL,
    [ExpertiseLevel]         VARCHAR(50)      NOT NULL,
    [AchievementsDescription] NVARCHAR(150)   NOT NULL,
    PRIMARY KEY CLUSTERED ([AcheivementID] ASC)
);

CREATE TABLE [dbo].[LessonsData] (
    [LessonID]          INT              IDENTITY (1, 1) NOT NULL,
    [LessonName]        NVARCHAR (50)    NOT NULL,
    [TotalXPUponCompletion]  INT              NOT NULL,
    [ExpertiseLevel]         VARCHAR(50)      NOT NULL,
    [LessonDescription] NVARCHAR(150)     NOT NULL,
    [LessonDuration]    NVARCHAR(50)     NOT NULL,
    [CourseID]          INT             NOT NULL,
    FOREIGN KEY (CourseID) REFERENCES CoursesData(CourseID),
    PRIMARY KEY CLUSTERED ([LessonID] ASC)
);

CREATE TABLE [dbo].[QuizzesData] (
    [QuizID]          INT              IDENTITY (1, 1) NOT NULL,
    [QuizName]        NVARCHAR (50)    NOT NULL,
    [XPUponCompletion]  INT              NOT NULL,
    [ExpertiseLevel]    VARCHAR(50)      NOT NULL,
    [QuizDescription] NVARCHAR(150)     NOT NULL,
    [QuizDuration]    NVARCHAR(50)     NOT NULL,
    [CourseID]          INT            NOT NULL,
    FOREIGN KEY (CourseID) REFERENCES CoursesData(CourseID),
    PRIMARY KEY CLUSTERED ([QuizID] ASC)
);

CREATE TABLE [dbo].[CoursesData] (
    [CourseID]          INT              IDENTITY (1, 1) NOT NULL,
    [CourseName]        NVARCHAR (50)    NOT NULL,
    [TotalXP]           INT              NOT NULL,
    [ExpertiseLevel]    VARCHAR(50)      NOT NULL,
    [CourseDescription] NVARCHAR(150)     NOT NULL,
    [TotalDuration]     NVARCHAR(50)     NOT NULL,
    PRIMARY KEY CLUSTERED ([CourseID] ASC)
);

SELECT * FROM [LessonsData];

INSERT INTO [LessonsData] ([LessonName], [TotalXPUponCompletion], [ExpertiseLevel], [LessonDescription], [LessonDuration], [CourseID])
VALUES
('Getting Started with Go', 150, 'Script Kiddie', 'Set up your Go environment and write your first Go program, exploring the basic syntax and structure.', '30 minutes', 1),
('Symmetric vs Asymmetric Encryption', 350, 'Mastering the BASICs', 'Understand the differences between symmetric and asymmetric encryption with real-world examples.', '50 minutes', 2),
('Writing Your First SQL Queries', 200, 'Intermediate', 'Learn how to write SELECT, INSERT, UPDATE, and DELETE statements to manage data in a SQL database.', '45 minutes', 3),
('Introduction to LUA Scripting', 150, 'Script Kiddie', 'Learn the fundamentals of LUA syntax, variables, and basic operations to start writing simple scripts.', '30 minutes', 4),
('Stacks and Queues Explained', 200, 'Intermediate', 'Learn how stacks and queues work, their key operations, and how to implement them in code.', '60 minutes', 5),
('Processes and Thread Management', 350, 'Mastering the BASICs', 'Explore how operating systems manage processes and threads, including scheduling and context switching.', '55 minutes', 6);
