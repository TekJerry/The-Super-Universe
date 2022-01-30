import React from 'react';
import { deleteCharacter } from '../../services';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Delete.css"

export default function Delete() {

  const params = useParams()
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteCharacter(params.id)
    navigate('/')
  }

  return (
    <div className='delete-btn'>
      <button className='button' onClick={handleDelete}>Delete</button>
    </div>
  )
}
