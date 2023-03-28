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
    title: 'Reasignar Operaciones',
    path: '',
    icon: <HomeSharpIcon />
  },
  {
    title: 'Supención / Aborto de Operación',
    path: '',
    icon: <HomeSharpIcon />
  },
  {
    title: 'Avance express de etapas / Redireccionar flujo',
    path: '',
    icon: <HomeSharpIcon />
  },
  {
    title: 'Corrección de Datos asociados a la Operación',
    path: '',
    icon: <HomeSharpIcon />
  },
  {
    title: 'Factura asociadas a DTE',
    path: '',
    icon: <HomeSharpIcon />
  },
  {
    title: 'Solicitud de Pago',
    path: '',
    icon: <HomeSharpIcon />
  },
  {
    title: 'Reporte',
    path: '',
    icon: <HomeSharpIcon />
  }
]
