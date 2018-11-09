import React, {Component} from 'react'
import Register from '../Register'
import {Card,Row,Col,List as Lista} from 'antd'
import {connect} from 'react-redux'
import {fetchToDos} from '../../redux/actions'
import _ from 'lodash'


class List extends Component{


    componentWillMount(){
        this.props.fetchToDosProp()
        console.log('mensaje desde el componente lista')
    }

    render(){
        const {todos} = this.props;
      
      
        return(
            
            <Card title="Lista de Tareas" style={{ width: '100%', marginTop: 20, backgroundColor: '' }} >

                    <Row gutter={16}>
                  
                        <Col sm={24} md={24}>
                        {
                            todos  ?  
                            
                            _.map(todos, (value, index) => {
                                return (
                                   
                                    <Lista  bordered key={index}> <Register  indice={index} key={index} registro={value.title} /></Lista> 
                               )
                              }) 
                              
                              :
                         <h3>Sin tareas :D</h3>
                        }
                      
                        </Col>
                      
                    </Row>
                    
                </Card>
        )
    }

}

const mapStateToProps = state => ({
    todos: state.todos.todos
  })

  const mapDispatchToProps = dispatch => ({
    fetchToDosProp : ()=>dispatch(fetchToDos())

  })
  export default connect(mapStateToProps,mapDispatchToProps)(List);