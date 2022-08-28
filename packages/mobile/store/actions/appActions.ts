import { createAction } from '@reduxjs/toolkit'

export const changePage = createAction('CHANGE_PAGE', (page: string) => {
  return {
    payload: {
      page: page
    }
  }
})
