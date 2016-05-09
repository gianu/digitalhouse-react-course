import React, { Component, PropTypes } from 'react';

export default class CounterLabel extends Component {
  static get propTypes() {
    return {
      value: PropTypes.number.isRequired
    };
  }

  componentWillMount() {
    //Invocado tanto en server como en cliente. Solo una vez justo antes que se
    // renderice el componente.
    console.log('[Counter Label] va a ser montado');
  }

  componentDidMount() {
    //Invocado una vez SOLO en el cliente. Justo despues del renderizado inicial
    // del componente.
    console.log('[Counter Label] ya fue montado');
  }

  componentWillReceiveProps(nextProps) {
    //Invocado cuando se reciben nuevas props.
    console.log('[Counter Label] voy a recibir las siguientes propiedades ', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //Se utiliza para saber si el componente debe re-renderizarse o no
    console.log('[Counter Label] el componente pregunta si debe actualizarse');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    //Se ejecuta antes de actualizar el componente
    console.log('[Counter Label] el componente va a actualizarse con lo siguiente: ', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    //Se ejecuta LUEGO de actualizar el componente
    console.log('[Counter Label] el componente se ha actualizado anteriormente tenia los siguientes valores: ', prevProps, prevState);
  }

  componenWillUnmount() {
    //Invocado justo antes de que el componentes se desmonte.
    console.log('[Counter Label] va a ser desmontado');
  }

  render() {
    return (
      <h1>El valor del contador es: {this.props.value}</h1>
    )
  }
}
