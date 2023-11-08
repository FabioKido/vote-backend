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
        res.status(201).json({
            user,
            message: 'User created successfully'
        })
    } catch (e) {
        console.log(e)
    }
}

const destroy = async (req, res) => {
    const { id } = req.params

    try {
        await prisma.user.delete({
            where: {
                id
            }
        })

        return res.json({
            message: 'user deleted successfully'
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = { index, store, destroy}