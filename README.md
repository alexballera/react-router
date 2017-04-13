# Modelo Webapp - React - Materializecss - Font Awesome

## React App 

[https://reacttraining.com/react-router/web/guides/quick-start](https://reacttraining.com/react-router/web/guides/quick-start)

## Instalamos MaterializeCSS

Instalamos *Materializecss* y *JQuery* con **NPM** desde la terminal:

    npm i -S jquery materialize-css

Usamos con en el archivo .jsx:

    import '../node_modules/materialize-css/sass/materialize.scss'
    import 'materialize-css'

### Agregamos la Fuente Roboto
Requerida para Material Design

[https://fonts.google.com/specimen/Roboto](https://fonts.google.com/specimen/Roboto)

### Agregamos Material Design Icon
Requerida para Material Design. Agregamos el enlace en el **head tag**
[https://material.io/icons/](https://material.io/icons/)

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">


### Instalamos Font Awesome
Instalamos desde la terminal:

    npm i -S font-awesome

Usamos en el archivo .jsx:

    import 'font-awesome/scss/font-awesome.scss'

## Agregando Estilos
### Inline:

    <tag style={{color: '#8e24aa'}}></tag>

### Declarando Variable

    var styles = {
      backgroundColor: '#d81b60',
      color: '#2196f3',
      marginTop: 50 // por defecto no se coloca px
    }
    <tag style={styles}></tag>

### Mediante Archivo Externo

**Style.jsx**

    var blue = '#2196f3'
    var red = '#d81b60'
    
    module.exports = {
      blue: blue,
      red: red
    }

**Importamos el archivo Style.jsx**

    import style from './Style.jsx'

**Declaramos la variable de estilos**

    var styleTag = {
      backgroundColor: style.blue,
      color: style.red
    }

**Agregamos los estilos**

    <tag style={styleTag}></tag>

## React Scroll
[https://github.com/fisshy/react-scroll](https://github.com/fisshy/react-scroll)

## Awesome React Component
[https://github.com/brillout/awesome-react-components](https://github.com/brillout/awesome-react-components)

## Configurando handleEvent

Cambiar

    handleChange = (event, index, value) => this.setState({value})

por

    handleChange (event, index, value) {
      this.setState({value})
    }

Bindearlo en el Contructor

    constructor (props) {
      super(props)
      this.state = {value: 1}
      this.handleChange = this.handleChange.bind(this)
    }
