'use server'

import { revalidatePath } from "next/cache";

export async function getAllProducts() {
  try {
    const products = await fetch('http://127.0.0.1:8000/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if(!products.ok) {
    throw new Error('Failed to fetch products')
  }

  const data = await products.json()

  revalidatePath('/')
  return data;
  } catch (error) {
    console.log(error)
  }

}