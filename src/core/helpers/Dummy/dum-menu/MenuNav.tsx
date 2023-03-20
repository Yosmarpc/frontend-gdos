import { HomeSharpIcon } from '../../../../assets/Icons/Icons'
import { PrivateRoutes } from '../../../constants/TypeRouter'

export const navConfig = [
  {
    title: 'Home',
    path: PrivateRoutes.APP,
    icon: <HomeSharpIcon />
  },
  {
    title: 'Ingreso Operación',
    path: PrivateRoutes.INCOME_OPERATIONS,
    icon: <HomeSharpIcon />
  },
  {
    title: 'Estado Solicitud',
    path: '',
    icon: <HomeSharpIcon />
  },
  {
    title: 'Reporte',
    path: '',
    icon: <HomeSharpIcon />
  }
]
