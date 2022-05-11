import React from 'react'
import styled from 'styled-components'


const Popupone = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Popupinner = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 850px;
  background-color: #B592BB;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  box-shadow: 2px 2px 5px darkgrey;
  border-radius: 10px;
  margin: 10px 27px;
  width: 15vw;
  height: 60vh;
`

class Popup extends React.Component {
   render(props) {
      return (props.trigger) ? (
         <>
            <Popupone>
               <Popupinner>
                  {props.children}
               </Popupinner>
            </Popupone>
         </>
      ) : (
         ''
      );
   }
}

export default Popup;