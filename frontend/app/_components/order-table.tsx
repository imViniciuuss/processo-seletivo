'use client'

import React, { useState } from 'react'
import { CSVLink } from 'react-csv'
import { FileDown, FileUp } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import { getAllProducts } from '../actions'
import OrderTableRow from './order-table-row'
import UploadFile from './upload-file'

export default function OrderTable() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const { toast } = useToast()

  const handleClick = async () => {
    try {
      setLoading(true)
      const fetchProducts = await getAllProducts()
      setProducts(fetchProducts || [])
      setLoading(false)
      toast({
        title: 'Success!',
        description: 'products imported successfully!',
      })

    } catch (error) {
      toast({
        title: 'Error!',
        description: 'Something went wrong during the import!',
      })
    }
  }


  return (
    <div className="flex flex-col gap-4">
      <div className='flex gap-2'>
        <Button onClick={handleClick} disabled={loading}>
          <FileUp className='mr-2 h-4 w-4' />
          Import Products
        </Button>
        <UploadFile />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length === 0 && (
            <TableRow>
              <TableCell colSpan={8} className='w-full text-center'>Empty list!</TableCell>
            </TableRow>
          )}
          {products && (
            <OrderTableRow products={products} />
          )}
        </TableBody>
      </Table>
      {products.length > 0 && (
        <CSVLink className='flex items-center justify-center rounded bg-foreground w-[177px] text-background py-2 px-3 text-sm' data={products} filename={'productsExport.csv'}>
          <FileDown className='mr-3 w-4 h-4' />
          Export products
        </CSVLink>
      )}
    </div>
  )
}
