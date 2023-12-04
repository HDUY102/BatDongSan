/*
  Warnings:

  - A unique constraint covering the columns `[UserName]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Category_idCategory` to the `post` table without a default value. This is not possible if the table is not empty.
  - Made the column `UserName` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `post` ADD COLUMN `Category_idCategory` INTEGER NOT NULL,
    MODIFY `date` DATE NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `user` MODIFY `UserName` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE INDEX `fk_Post_Category_idx` ON `post`(`Category_idCategory`);

-- CreateIndex
CREATE UNIQUE INDEX `UserName_UNIQUE` ON `user`(`UserName`);

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `fk_Post_Category` FOREIGN KEY (`Category_idCategory`) REFERENCES `category`(`idCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;
