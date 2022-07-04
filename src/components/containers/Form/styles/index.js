import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 50px auto 0;
`

const StyledInput = styled.input`
  height: 50px;
  border: 1px solid #ea7e91;
  border-radius: 25px;
  margin: 12.5px 0;
  font-size: 18px;
  padding: 0 25px;
  color: #ea7e91;
`

export {
  StyledForm,
  StyledInput,
}