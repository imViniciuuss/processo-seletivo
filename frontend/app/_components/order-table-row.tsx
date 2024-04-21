/* eslint-disable @next/next/no-img-element */
'use client'

import { TableCell, TableRow } from '@/components/ui/table'
import React from 'react'

type ProductsInterface = {
  id: string | number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating_rate: string;
  count: string | number;
}

interface ProductsInterfaceProps {
  products: ProductsInterface[]
}

export default function OrderTableRow({products}: ProductsInterfaceProps) {
  return (
    <>
    {products.map((product) => (
      <TableRow key={product.id}>
        <TableCell className="font-medium">{product.id}</TableCell>
        <TableCell className="font-medium">{product.title}</TableCell>
        <TableCell>${product.price}</TableCell>
        <TableCell className='line-clamp-3'>{product.description}</TableCell>
        <TableCell>{product.category}</TableCell>
        <TableCell>
          <img
            alt={`Product ${product.title} image`}
            className="aspect-square rounded-md object-cover"
            height="64"
            src={product.image}
            width="64"
          />
        </TableCell>
        <TableCell>{product.rating_rate}</TableCell>
        <TableCell>{product.count}</TableCell>
      </TableRow>
    ))}
    </>
  )
}
