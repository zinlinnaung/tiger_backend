-- CreateTable
CREATE TABLE `InvitedPeople` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `additional_guest` BOOLEAN NOT NULL DEFAULT false,
    `additional_guest_name` VARCHAR(191) NULL,
    `confirmed` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `created_by` INTEGER NULL,
    `updated_by` INTEGER NULL,

    UNIQUE INDEX `InvitedPeople_phone_key`(`phone`),
    UNIQUE INDEX `InvitedPeople_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
