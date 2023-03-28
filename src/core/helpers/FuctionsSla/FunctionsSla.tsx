import { colorSla } from '../../constants/Colores'

export const statusSlaColor = (day: number) => {
  try {
    if (day >= 1 && day < 10) {
      return colorSla.colorEnPlazo
    } else if (day > 10 && day < 20) {
      return colorSla.colorPorVencer
    } else {
      return colorSla.colorFueraDePlazo
    }
  } catch (error: any) {
    console.log(error.message)
  }
}

export const statusSla = (day: number) => {
  try {
    if (day >= 1 && day < 10) {
      return 'EN PLAZO'
    } else if (day > 10 && day < 20) {
      return 'PROXIMA A VENCER'
    } else {
      return 'FUERA DE PLAZO'
    }
  } catch (error: any) {
    console.log(error.message)
  }
}
