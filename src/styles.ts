import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  background-color: #3179ba;

  display: flex;
`

export const ColumnContainer = styled.div`
  width: 300px;
  min-height: 40px;
  padding: 8px;
  margin-right: 20px;
  border-radius: 3px;
  flex-grow: 0;

  background-color: #ebecf0;
`

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`

export const CardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: .5rem;
  padding: .5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`