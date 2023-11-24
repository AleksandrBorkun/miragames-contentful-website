import styled from '@emotion/styled'

const CheckboxContainer = styled.div`

  margin-left: 100px;
  margin-top: 10px;
  display: flex;
  align-items: center;


label{
  font-size: 2.2em;
  cursor: pointer;
  display: flex;
  &:hover{
    &::before{
      background-color: #D466F2;
    }
  }
}

input{
  cursor: pointer;
  opacity: 0;
  position: absolute;
}

input:checked{
  &+label::before{
    content: "\\002714";
    background-color: #8613a5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

input:focus{
  &+label::before{
    box-shadow: 0 0 20px white;
  }
}

label::before{
  content: '';
  border: 0.05em solid white;
  height: 1em;
  width: 1em;
  border-radius: 0.15em;
  margin-right: 0.5em;
}
`

const Checkbox = ({labelTxt, id}) => (
    <CheckboxContainer>
      <input type={"checkbox"} id={id}/>
      <label htmlFor={id}>{labelTxt}</label>
    </CheckboxContainer>
)
