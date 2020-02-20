import React,{Component} from 'react';
import '../css/popup.css';

class Popup extends Component {
    state = { isOpen : true }

    render() {        
      return (
        <>            
            <div className={this.state.isOpen ? "dim open" : "dim close" }>
                <div>
                    <div>
                        <button type="button">저장</button>
                        <button type="button" onClick={()=>{ this.props.close(this.props.data) }}>닫기</button>
                    </div>    
                </div>        
            </div>
        </>
      )

    }
  }
  export default Popup;
