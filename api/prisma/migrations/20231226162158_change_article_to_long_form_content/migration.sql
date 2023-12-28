/*
  Warnings:

  - You are about to drop the `_ArticleToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `articles` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "LongFormContentType" AS ENUM ('ARTICLE', 'REVIEW', 'BLOG', 'POST', 'NEWS_LETTER');

-- DropForeignKey
ALTER TABLE "_ArticleToTag" DROP CONSTRAINT "_ArticleToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArticleToTag" DROP CONSTRAINT "_ArticleToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "articles" DROP CONSTRAINT "articles_user_id_fkey";

-- DropTable
DROP TABLE "_ArticleToTag";

-- DropTable
DROP TABLE "articles";

-- DropEnum
DROP TYPE "ArticleType";

-- CreateTable
CREATE TABLE "long_form_content" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "type" "LongFormContentType" NOT NULL DEFAULT 'REVIEW',
    "create_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "user_id" UUID NOT NULL,

    CONSTRAINT "long_form_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LongFormContentToTag" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LongFormContentToTag_AB_unique" ON "_LongFormContentToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_LongFormContentToTag_B_index" ON "_LongFormContentToTag"("B");

-- AddForeignKey
ALTER TABLE "long_form_content" ADD CONSTRAINT "long_form_content_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LongFormContentToTag" ADD CONSTRAINT "_LongFormContentToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "long_form_content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LongFormContentToTag" ADD CONSTRAINT "_LongFormContentToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
