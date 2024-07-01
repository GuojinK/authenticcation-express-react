const { PrismaClient } = require('@prisma/client');

prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
})

module.exports = prisma;
