const { PrismaClient } = require('@prisma/client')
const { v4 } = require('uuid')

const prisma = new PrismaClient()

const index = async (req, res) => {
    try {
        const participants = await prisma.participant.findMany()
        
        return res.json(participants)
    } catch (e) {
        console.log(e)
    }
}

const store = async (req, res) => {
    const { name } = req.body

    try {
        const participant = await prisma.participant.create({
            data: {
                id: v4(),
                name
            }
        })

        return res.status(201).json({
            participant,
            message: 'Participant created successfully'
        })
    } catch (e) {
        console.log(e)
    }
}

const update = async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    try {
        await prisma.participant.update({
            data: {
                name
            },
            where: {
                id
            }
        })

        return res.json({
            message: 'participant updated successfully'
        })
    } catch (e) {
        console.log(e)
    }
}

const destroy = async (req, res) => {
    const { id } = req.params

    try {
        await prisma.participant.delete({
            where: {
                id
            }
        })

        return res.json({
            message: 'Participant deleted successfully'
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = { index, store, update, destroy }