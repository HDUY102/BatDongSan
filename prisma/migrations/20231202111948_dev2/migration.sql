/*
  Warnings:

  - A unique constraint covering the columns `[Post_idPost]` on the table `Property` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Property_Post_idPost_key` ON `Property`(`Post_idPost`);
