import React, { Component } from 'react'
import ReadMore from '../ReadMore'
import { List, Button, Icon, Input, Tooltip } from 'antd'
import { connect } from 'react-redux'

import 'antd/dist/antd.css'
import { todosRef } from '../../firebase/firebase'
const { TextArea } = Input;

class Register extends Component {
    state = {
        itemEdit: true,
    }

    deleteTask = (e) => {
        todosRef.child(e).remove();
    }
    editTask = (e) =>{
        todosRef.child(e).update({
            title : document.getElementById(e).value
        })
    }
    render() {

        let { registro, indice } = this.props
        

      

        return (

            this.state.itemEdit ?

            <List.Item
                actions={[
                    <div>
                        <Tooltip placement="top" title="Editar tarea">
                            <Button onClick={() => { this.setState({ itemEdit: !this.state.itemEdit }) }} type="default"  >
                                <Icon type="edit" />
                            </Button>
                        </Tooltip>
                        <Tooltip placement="top" title="Eliminar tarea">
                            <Button onClick={() => this.deleteTask(indice)} type="danger"  >
                                <Icon type="delete" />
                            </Button>
                        </Tooltip>
                        

                    </div>


                ]}>
                <ReadMore>
                {registro}
                </ReadMore>
               
            </List.Item> 
                :

        
            <List.Item
                actions={[
                    <div>
                        <Tooltip placement="top" title="Guardar cambios">
                            <Button onClick={ () => {this.editTask(indice); this.setState({ itemEdit: !this.state.itemEdit })}} type="default"  >
                                <Icon type="save" />
                            </Button>
                        </Tooltip>
                        <Tooltip placement="top" title="Cancelar cambios">
                            <Button onClick={() => { this.setState({ itemEdit: !this.state.itemEdit }) }} type="danger"  >
                                <Icon type="rollback" />
                            </Button>
                        </Tooltip>
                       

                    </div>


                ]}>

                <TextArea id={indice} defaultValue={registro} autosize/>
            </List.Item>  

           
        )
    }


}



export default connect()(Register);