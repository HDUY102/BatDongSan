-- CreateTable
CREATE TABLE `Category` (
    `idCategory` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryName` VARCHAR(255) NULL,

    PRIMARY KEY (`idCategory`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImagePost` (
    `idImagePost` INTEGER NOT NULL AUTO_INCREMENT,
    `Post_idPost` INTEGER NOT NULL,
    `NameImagePost` VARCHAR(255) NULL,
    `ImagePost` VARCHAR(255) NULL,

    UNIQUE INDEX `ImagePost_Post_idPost_key`(`Post_idPost`),
    INDEX `fk_ImagePost_Post1_idx`(`Post_idPost`),
    PRIMARY KEY (`idImagePost`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImageProperty` (
    `idImage` INTEGER NOT NULL AUTO_INCREMENT,
    `NameImage` VARCHAR(255) NULL,
    `Image` VARCHAR(255) NULL,
    `Property_idProperty` INTEGER NOT NULL,

    INDEX `fk_Image_Property1_idx`(`Property_idProperty`),
    PRIMARY KEY (`idImage`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `idPost` INTEGER NOT NULL AUTO_INCREMENT,
    `User_idUser` INTEGER NOT NULL,
    `Title` VARCHAR(255) NULL,
    `Content` VARCHAR(255) NULL,
    `date` DATE NULL,

    INDEX `fk_Post_User1_idx`(`User_idUser`),
    PRIMARY KEY (`idPost`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Property` (
    `idProperty` INTEGER NOT NULL AUTO_INCREMENT,
    `Title` VARCHAR(255) NULL,
    `Description` VARCHAR(255) NULL,
    `Address` VARCHAR(255) NULL,
    `Price` DOUBLE NULL,
    `Area` DOUBLE NULL,
    `NumberRoom` INTEGER NULL,
    `Category_idCategory` INTEGER NOT NULL,
    `User_idUser` INTEGER NOT NULL,
    `Post_idPost` INTEGER NOT NULL,

    INDEX `fk_Property_Post1_idx`(`Post_idPost`),
    INDEX `fk_Property_User1_idx`(`User_idUser`),
    INDEX `fk_table2_table1_idx`(`Category_idCategory`),
    PRIMARY KEY (`idProperty`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `idUser` INTEGER NOT NULL AUTO_INCREMENT,
    `UserName` VARCHAR(255) NULL,
    `PassWord` VARCHAR(255) NULL,
    `Phone` INTEGER NULL,
    `Role` VARCHAR(255) NULL,

    PRIMARY KEY (`idUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ImagePost` ADD CONSTRAINT `fk_ImagePost_Post1` FOREIGN KEY (`Post_idPost`) REFERENCES `Post`(`idPost`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ImageProperty` ADD CONSTRAINT `fk_Image_Property1` FOREIGN KEY (`Property_idProperty`) REFERENCES `Property`(`idProperty`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `fk_Post_User1` FOREIGN KEY (`User_idUser`) REFERENCES `User`(`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `fk_Property_Post1` FOREIGN KEY (`Post_idPost`) REFERENCES `Post`(`idPost`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `fk_Property_User1` FOREIGN KEY (`User_idUser`) REFERENCES `User`(`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `fk_table2_table1` FOREIGN KEY (`Category_idCategory`) REFERENCES `Category`(`idCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;
