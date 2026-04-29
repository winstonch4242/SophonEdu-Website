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

ALTER TABLE LearnersData ADD Salt UNIQUEIDENTIFIER DEFAULT NEWID();
UPDATE LearnersData SET Salt = NEWID();
ALTER TABLE LearnersData ADD PasswordHash VARBINARY(64);
UPDATE LearnersData SET PasswordHash = HASHBYTES('SHA2_512', Password + CAST(Salt AS NVARCHAR(36))) WHERE PasswordHash IS NULL;
DECLARE @Password NVARCHAR(50) = 'n3SOJ9A46ZmrVTCf';
SELECT * FROM LearnersData WHERE PasswordHash = HASHBYTES('SHA2_512', @Password + CAST(Salt AS NVARCHAR(36)));

ALTER TABLE LecturersData ADD Salt UNIQUEIDENTIFIER DEFAULT NEWID();
UPDATE LecturersData SET Salt = NEWID();
ALTER TABLE LecturersData ADD PasswordHash VARBINARY(64);
UPDATE LecturersData SET PasswordHash = HASHBYTES('SHA2_512', Password + CAST(Salt AS NVARCHAR(36))) WHERE PasswordHash IS NULL;
DECLARE @Password NVARCHAR(50) = 'B$8vL1*zR5@Xp';
SELECT * FROM LecturersData WHERE PasswordHash = HASHBYTES('SHA2_512', @Password + CAST(Salt AS NVARCHAR(36)));

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