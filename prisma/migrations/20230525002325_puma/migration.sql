-- CreateTable
CREATE TABLE "puma" (
    "IdAnimal" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "caracteristica" TEXT NOT NULL,
    "vacina" BOOLEAN NOT NULL,
    "idade" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "puma_pkey" PRIMARY KEY ("IdAnimal")
);
