/*
  Warnings:

  - Added the required column `host` to the `Log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referer` to the `Log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Log` ADD COLUMN `host` VARCHAR(191) NOT NULL,
    ADD COLUMN `referer` VARCHAR(191) NOT NULL,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
