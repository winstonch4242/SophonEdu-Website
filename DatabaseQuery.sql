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

CREATE TABLE [dbo].[LecturersData] (
    [LecturerID]   INT              IDENTITY (1, 1) NOT NULL,
    [FirstName]    NVARCHAR (50)    NOT NULL,
    [LastName]     NVARCHAR (50)    NOT NULL,
    [Age]          INT              NOT NULL,
    [Gender]       NVARCHAR (10)    NOT NULL,
    [AcademicRole] NVARCHAR (50)    NOT NULL,
    [EmailAddress] NVARCHAR (100)   NOT NULL,
    [Username]     NVARCHAR (50)    NOT NULL,
    [Password]     NVARCHAR (50)    NOT NULL,
    PRIMARY KEY CLUSTERED ([LecturerID] ASC)
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
('Liyana', 'Aziz', 26, 'liyana.aziz@gmail.com', 'liyaz26', 'La31tx8(g@1'),
('Marcus', 'Lee', 31, 'marcus.lee@hotmail.com', 'mlee31', 'Jl53a.S0=&k5'),
('Nurul', 'Farid', 24, 'nurul.farid@yahoo.com', 'nfarid24', '9nZ)N£q39uF'),
('Ethan', 'Wong', 29, 'ethan.wong@outlookcom', 'ewong29', '>f\A^rQ2<]31'),
('Hafiz', 'Zulkifli', 35, 'hafiz.zulkifli@proton.me', 'hzulkifli35', '4s6Y88X}]#([');

SELECT * FROM [AdminData];

ALTER TABLE LearnersData ADD Salt UNIQUEIDENTIFIER DEFAULT NEWID();
UPDATE LearnersData SET Salt = NEWID();
ALTER TABLE LearnersData ADD PasswordHash VARBINARY(64);
UPDATE LearnersData SET PasswordHash = HASHBYTES('SHA2_512', Password + CAST(Salt AS NVARCHAR(36))) WHERE PasswordHash IS NULL;
DECLARE @Password NVARCHAR(50) = 'n3SOJ9A46ZmrVTCf';
SELECT * FROM LearnersData WHERE PasswordHash = HASHBYTES('SHA2_512', @Password + CAST(Salt AS NVARCHAR(36)));

UPDATE AdminData SET Salt = NEWID();
ALTER TABLE AdminData ADD PasswordHash VARBINARY(64);
UPDATE AdminData SET PasswordHash = HASHBYTES('SHA2_512', Password + CAST(Salt AS NVARCHAR(36))) WHERE PasswordHash IS NULL;
