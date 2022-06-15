import { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } from './handler.js'
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*']
      }
    }
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
    options: {
      cors: {
        origin: ['*']
      }
    }
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
    options: {
      cors: {
        origin: ['*']
      }
    }
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
    options: {
      cors: {
        origin: ['*']
      }
    }
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
    options: {
      cors: {
        origin: ['*']
      }
    }
  }
]
export default routes
