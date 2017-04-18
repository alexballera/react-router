import $ from 'jquery'
import '../vendors/jquery-ui.js'

var formSection = `
<form name="formulario" class="formulario__section" id="formularioSeccion" action="sendMail.php" method="post" >
    <div id="nameSeccion-group" class="form-item form-item-name">
      <label for="nameSeccion"></label>
      <input type="text" placeholder="Nombre" name="nameSeccion" id="nameSeccion">
    </div>
    <div id="lastnameSeccion-group" style="display:none;">
      <label for="lastnameSeccion"></label>
      <input type="text" placeholder="Apellido" name="lastnameSeccion" id="lastnameSeccion">
    </div>
    <div id="emailSeccion-group" class="form-item form-item-email">
      <label for="emailSeccion"></label>
      <input type="email" placeholder="Email" name="emailSeccion" id="emailSeccion">
    </div>
    <div id="phoneSeccion-group" class="form-item form-item-phone">
      <label for="phoneSeccion"></label>
      <input type="tel"  placeholder="Teléfono" name="phoneSeccion" id="phoneSeccion">
    </div>
    <div id="msgSeccion-group" class="form-item form-item-message">
      <label for="msgSeccion"></label>
      <textarea cols="30" rows="10"  placeholder="Mensaje" name="msgSeccion" id="msgSeccion" ></textarea>
    </div>
    <p class="formulario__texto politicas">
      Acepto políticas de tratamiento de datos personales
    </p>
    <div class="formulario__item">
      <button type="submit" class="submit" id="submit">Enviar</button>
    </div>
</form>`

export default () => {
  $('#formulario_contacto').append(formSection)

  $('#formularioSeccion').submit(function (event) {
    $('.form-group').removeClass('has-error') // remove the error class
    $('.help-block').remove() // remove the error text

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
    var formData = {
      'name': $('input#nameSeccion').val(),
      'email': $('input#emailSeccion').val(),
      'phone': $('input#phoneSeccion').val(),
      'msg': $('textarea#msgSeccion').val()
    }

        // process the form
    $.ajax({
      type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
      url: 'sendMail.php', // the url where we want to POST
      data: formData, // our data object
      dataType: 'json', // what type of data do we expect back from the server
      encode: true
    })
            // using the done promise callback
            .done(function (data) {
                // log data to the console so we can see
              console.log(data)

                // here we will handle errors and validation messages
              if (!data.success) {
                  // handle errors for name ---------------
                if (data.errors.name) {
                  $('#nameSeccion-group').addClass('has-error') // add the error class to show red input
                  $('#nameSeccion-group').append('<div class="help-block">' + data.errors.name + '</div>') // add the actual error message under our input
                }

                  // handle errors for email ---------------
                if (data.errors.email) {
                  $('#emailSeccion-group').addClass('has-error') // add the error class to show red input
                  $('#emailSeccion-group').append('<div class="help-block">' + data.errors.email + '</div>') // add the actual error message under our input
                }
              } else {
                  // ALL GOOD! just show the success message!
                  // $('form').append('<div class="alert alert-success">' + data.message + '</div>');

                  // usually after form submission, you'll want to redirect
                  // window.location = '/thank-you'; // redirect a user to another page
                console.log(data.message)
                $('#dialog').dialog({
                  show: {
                    effect: 'explode',
                    duration: 700
                  },
                  hide: {
                    effect: 'explode',
                    duration: 700
                  }
                })
                $('input#nameSeccion').val('')
                $('input#lastnameSeccion').val('')
                $('input#emailSeccion').val('')
                $('input#phoneSeccion').val('')
                $('textarea#msgSeccion').val('')
              }
            })

            // using the fail promise callback
            .fail(function (data) {
                // show any errors
                // best to remove for production
              console.log(data)
            })

        // stop the form from submitting the normal way and refreshing the page
    event.preventDefault()
  })
}
