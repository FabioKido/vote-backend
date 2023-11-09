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

const show = async (req, res) => {
    const { id } = req.params

    try {
        const wall = await prisma.wall.findUnique({
            where: {
                id
            }
        })

        return res.json(wall)
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

const update = async (req, res) => {
    const { id } = req.params
    const {
        starts_at, 
        ends_at,   
        open
    } = req.body

    try {
        await prisma.wall.update({
            data: {
                starts_at, 
                ends_at,   
                open
            },
            where: {
                id
            }
        })

        return res.json({
            message: 'Wall updated successfully'
        })
    } catch (e) {
        console.log(e)
    }
}

const destroy = async (req, res) => {
    const { id } = req.params
    
    try {
        await prisma.wall.delete({
            where: {
                id
            }
        })

        return res.json({ message: 'Wall deleted successfully' })
    } catch (e) {
        console.error(e)
    }
}

module.exports = { index, show, store, update, destroy }