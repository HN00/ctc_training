
const textFieldBinder = ( {formData, onChangeFormData} ) => {
  const newFunction = (name) => {
    return {
      name,
      value: formData[name],
      onChange: (e) => onChangeFormData(name, e.target.value),
    }
  }
  return newFunction
}

const submitBinder = ({formData}) => {
  return (onSubmit) => ({
    onSubmit: (e) => {
      console.log({ e })
      e.preventDefault()
      onSubmit(formData)
    }
  })
}

export const createFormBinder = (formResponse) => {
  return {
    textFieldBinder: textFieldBinder(formResponse),
    submit: submitBinder(formResponse)
  }
}