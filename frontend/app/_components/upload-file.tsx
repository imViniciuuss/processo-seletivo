import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { Upload } from 'lucide-react'
import React, { useCallback, useState } from 'react'
import Dropzone, { useDropzone } from 'react-dropzone'

export default function UploadFile() {
  const [uploadedFileName, setUploadedFileName] = useState('');
  const { toast } = useToast()


  const onDrop = useCallback(async(acceptedFiles: File[]) => {
    console.log('loggin drop file', acceptedFiles)

    try {
      const formData = new FormData()
      formData.append('file', acceptedFiles[0])

      const res = await fetch('http://127.0.0.1:8000/api/products/import', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        toast({
          title: 'Sucesso!',
          description: 'Produtos CSV importados com sucesso!',
        })
      } else {
        if (!res.ok) {
          toast({
            title: 'Error!',
            description: 'Algo deu errado na importaçao!',
          })
        }
      }

      setUploadedFileName(acceptedFiles[0].name)

    } catch (error) {
      console.log(error)
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"]
    },
    maxFiles: 1
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Upload className='mr-3 w-4 h-4' />
          Importar produtos CSV
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Faça upload do seu arquivo</DialogTitle>
          <DialogDescription>
            Apenas é aceito arquivos .CSV para a importaçao!
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4" {...getRootProps()}>
          <div className="flex flex-col justify-center items-center gap-4 h-56 border-2 border-dashed border-sky-500">
            <Upload className='w-8 h-8' />
            <Input {...getInputProps()} type='file' />
            <span className='text-zinc-400'>drop a file here</span>
            <p className='text-sm'><span className='text-red-600'>*</span>File supported .CSV</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className='font-bold'>Uploaded Files</h1>
            <span>{uploadedFileName}</span>
          </div>

        </div>


        <DialogFooter>
          <Button className='w-full' type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog >

  )
}
