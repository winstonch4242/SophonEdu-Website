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



INSERT INTO [LearnersData] (FirstName, LastName, Age, Gender, LevelOfStudy, EmailAddress, Username, Password)
VALUES
('Mahavir', 'Gupta', 19, 'Male', 'Diploma', 'mahavir.gt@gmail.com', 'guptamaha340', 'n3SOJ9A46ZmrVTCf'),
('Jennifer', 'Yeo', 22, 'Female', 'Undergraduate', 'jenn.yeo@outlook.com', 'jenny263', 'MTjOJrI74koRUGIN'),
('Aiman', 'Rahman', 17, 'Male', 'Self-Taught', 'amrh119@proton.me', 'aiman19', 'vtzxApQOyC01IBct'),
('Rizky', 'Pratama', 18, 'Male', 'Foundation', 'rkzprt@hotmail.com', 'pratamawkwk', 'gDNMdDyNF1HHYgo5');

SELECT * FROM [LearnersData];

INSERT INTO [LecturersData] (FirstName, LastName, Age, Gender, AcademicRole, EmailAddress, Username, Password)
VALUES
('Nurul', 'Hadi', 42, 'Female', 'Senior Lecturer', 'nurul.hadi@yahoo.com', 'nurulh42', 'B$8vL1*zR5@Xp'),
('Jason', 'Tan', 38, 'Male', 'Mentor', 'jason.tan@outlook.com', 'jasont38', 'M!4qZ7&cY9#Hs'),
('Siti', 'Zainab', 45, 'Female', 'Programme Leader', 'siti.zainab@gmail.com', 'sitiz45', 'K@2nF6^pT8!Wd'),
('Wei Hang', 'Lim', 33, 'Male', 'Lecturer', 'daniel.lee@yahoo.com', 'weihlim03', 'R9!xU3#mQ7@Az');

SELECT * FROM [LecturersData];

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