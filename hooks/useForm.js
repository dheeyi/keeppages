import { useState } from 'react'

export const useForm = (initialValues) => {

  const [formValues, setForm] = useState(initialValues)

  const resetForm = (initialForm) => {
    setForm(initialForm)
  }

  const handleChange = ({ target }) => {

    const { type, checked, name, value } = target
    const correctedValue = type === 'checkbox' ? checked : value

    setForm({
      ...formValues,
      [name]: correctedValue
    })

  }

  return [formValues, handleChange, resetForm]
}
