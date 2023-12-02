/*
  Warnings:

  - You are about to drop the column `Post_idPost` on the `property` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `fk_Property_Post1`;

-- AlterTable
ALTER TABLE `post` MODIFY `date` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `property` DROP COLUMN `Post_idPost`;
