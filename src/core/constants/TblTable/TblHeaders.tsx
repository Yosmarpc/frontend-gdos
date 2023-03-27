import { Data } from '../../../pages/Dashboard/components/TblSolicitud/TblSolicitud'

interface IheadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
    width: number;
    align: string;
  }

export const headCellsSolicitud: readonly IheadCell[] = [
  {
    id: 'numberOrder',
    numeric: false,
    disablePadding: false,
    label: 'Número de orden',
    width: 100,
    align: 'left'
  },
  {
    id: 'client',
    numeric: true,
    disablePadding: false,
    label: 'Cliente',
    width: 250,
    align: 'center'
  },
  {
    id: 'dateRegister',
    numeric: true,
    disablePadding: false,
    label: 'Fecha de registro',
    width: 100,
    align: 'center'
  },
  {
    id: 'dateUpdate',
    numeric: true,
    disablePadding: false,
    label: 'F. ultimo estado',
    width: 100,
    align: 'center'
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Estado Actual',
    width: 150,
    align: 'center'
  },
  {
    id: 'sla',
    numeric: true,
    disablePadding: false,
    label: 'SLA',
    width: 80,
    align: 'center'
  },
  {
    id: 'assignedUser',
    numeric: true,
    disablePadding: false,
    label: 'Usuario Asignado',
    width: 80,
    align: 'center'
  }
]
