import { createFormBinder } from '../../../utils/createFormBinder'
import { useForm } from '../useForm'
import { StyledForm, StyledInput } from './styles'

export const Form = () => {
  const formResponse = useForm({ email: "", name: "", address: "" })
  const binder = createFormBinder(formResponse)

  const onCustomSubmit = (values) => {
    console.log(values.email);
  }

  return (
    <StyledForm {...binder.submit(onCustomSubmit)}>
      <StyledInput {...binder.textFieldBinder("email")} placeholder="email" />
      <StyledInput {...binder.textFieldBinder("name")} placeholder="name" />
      <StyledInput {...binder.textFieldBinder("address")} placeholder="address" />
      <button type='submit'/>
    </StyledForm>
  )
}