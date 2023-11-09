const { PrismaClient } = require('@prisma/client')

const { v4 } = require('uuid')

const prisma = new PrismaClient()

const index = async (req, res) => {
    try {
        const walls = await prisma.wall.findMany()

        return res.json(walls)
    } catch (e) {
        console.log(e)
    }
}

const store = async (req, res) => {
    const {  
        starts_at, 
        ends_at,   
        open
    } = req.body

    try {
        const wall = await prisma.wall.create({
            data: {
                id: v4(),   
                starts_at, 
                ends_at,   
                open
            }
        })

        return res.status(201).json({
            wall,
            message: 'wall created successfully'
        })
    } catch (e) {
        console.error(e)
    }
}

module.exports = { store, index }