const { PrismaClient } = require('@prisma/client')
const { v4 } = require('uuid')

const prisma = new PrismaClient()

const index = async(req, res) => {
    try {
        const users = await prisma.user.findMany()

        return res.json(users)
    } catch(e) {
        console.log(e)
    }
}

const store = async (req, res) => {
    try {
    const user = await prisma.user.create({
            data: {
                id: v4()
            },
        })
        res.json({
            user,
            message: 'User created successfully'
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = { index, store }