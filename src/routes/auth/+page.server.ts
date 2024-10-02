import { fail, redirect } from '@sveltejs/kit'
import bcrypt from 'bcrypt'
import prisma from '$lib/prisma'

export const actions = {
  signup: async ({ request }) => {
    const data = await request.formData()
    const email = data.get('email')
    const password = data.get('password')

    if (!email || !password) {
      return fail(400, { message: 'Missing email or password' })
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword
        }
      })

      // Here you would set up a session for the user
      
      return { success: true }
    } catch (error) {
      console.error('Error creating user:', error)
      return fail(500, { message: 'Could not create user' })
    }
  },

  signin: async ({ request, cookies }) => {
    const data = await request.formData()
    const email = data.get('email')
    const password = data.get('password')

    if (!email || !password) {
      return fail(400, { message: 'Missing email or password' })
    }

    try {
      const user = await prisma.user.findUnique({ where: { email } })

      if (!user) {
        return fail(400, { message: 'Invalid email or password' })
      }

      const passwordMatch = await bcrypt.compare(password, user.password)

      if (!passwordMatch) {
        return fail(400, { message: 'Invalid email or password' })
      }

      // Here you would set up a session for the user

      return { success: true }
    } catch (error) {
      console.error('Error signing in:', error)
      return fail(500, { message: 'Could not sign in' })
    }
  }
}
