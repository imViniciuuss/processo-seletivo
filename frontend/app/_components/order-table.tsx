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
        title: 'Sucesso!',
        description: 'Você importou com sucesso os produtos!',
      })

    } catch (error) {
      toast({
        title: 'Error!',
        description: 'Algo deu errado ao importar os produtos!',
      })
    }
  }


  return (
    <div className="flex flex-col gap-4">
      <div className='flex gap-2'>
        <Button onClick={handleClick} disabled={loading}>
          <FileUp className='mr-2 h-4 w-4' />
          Importar Produtos
        </Button>
        <UploadFile />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Título</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Imagem</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Quantidade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length === 0 && (
            <TableRow>
              <TableCell colSpan={8} className='w-full text-center'>Lista vazia!</TableCell>
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
          Exportar produtos
        </CSVLink>
      )}
    </div>
  )
}
