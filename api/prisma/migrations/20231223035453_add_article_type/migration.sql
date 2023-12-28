-- CreateEnum
CREATE TYPE "ArticleType" AS ENUM ('ARTICLE', 'REVIEW');

-- AlterTable
ALTER TABLE "articles" ADD COLUMN     "type" "ArticleType" NOT NULL DEFAULT 'REVIEW';
