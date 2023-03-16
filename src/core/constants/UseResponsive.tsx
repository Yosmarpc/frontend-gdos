import { useMediaQuery } from '@mui/material'

export const useDetectWidth = (valorWidth: string) => {
  const isWidth: boolean = useMediaQuery(valorWidth)
  return isWidth
}
