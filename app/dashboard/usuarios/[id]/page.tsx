import { getMenuItemById } from '@/utils/serverActions';
import React from 'react'
import EditForm from '../EditForm';
import { MenuItem } from '@/types';

const Edit = async ({ params }: { params: { id: string } }) => {
  const _id = params.id;
  const menuItem: MenuItem = await getMenuItemById(_id)
  return (
    <main className="flex-1 ml-64 p-8 bg-blanco-oscuro">
      <EditForm menuItem={menuItem} />
    </main>
  )
}

export default Edit