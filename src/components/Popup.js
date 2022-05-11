import React from 'react'
import { Popupone, Popupinner } from '../styled'


class Popup extends React.Component {
   render() {
      return (this.props.trigger) ? (
         <>
            <Popupone>
               <Popupinner>
                  {this.props.children}
               </Popupinner>
            </Popupone>
         </>
      ) : (
         ''
      );
   }
}

export default Popup;