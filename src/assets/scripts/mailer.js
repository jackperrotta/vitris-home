$(document).ready(function(){
    $('#emailForm').submit(function(e){
      e.preventDefault()
      let $inputs = $('#emailForm :input' )
      let values  = {}
      values.message = {}
      values.to = 'jack@vitriswireless.com'
      values.subject = 'Contact Form Submission'
      $inputs.each(function () {
        values.message[this.name] = $(this).val()
      })
  
      
      $.ajax({
        url: "https://mailer.tryvitris.com/sendMail",
        method: "POST",
        data: values,
        dataType: "text",
        success: function (data) {
          
          $('#emailForm').css('display', 'none')
          $('#returnHome').css('display', 'initial')
  
        },
        error: function (textStatus, errorThrown) {
            $('#emailForm').css('display', 'none')
            $('#returnHome').css('display', 'initial')
        }
      })
  
    })
  })