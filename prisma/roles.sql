-- Run once in the Neon SQL editor after deploying roles.
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'user';
CREATE INDEX IF NOT EXISTS "User_role_idx" ON "User"(role);
