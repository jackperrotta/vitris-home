setTimeout(() => {
    $('#1minModal').modal('show')
  }, 10000);
      
  setTimeout(() => {
    $('#2minModal').modal('show')
  }, 900000);

  $(document).ready(function(){
    $('#emailForm2').submit(function(e){
      e.preventDefault()
      let $inputs = $('#emailForm2 :input' )
      let values  = {}
      values.message = {}
      values.to = 'jack@tryvitris.com'
      values.subject = '50% Off Request'
      $inputs.each(function () {
        values.message[this.name] = $(this).val()
      })

      $.ajax({
        url: "https://mailer.tryvitris.com/sendMail",
        method: "POST",
        data: values,
        dataType: "json",
        success:  (data) => {
          
          $('#emailForm2').css('display', 'none')
          $('#returnHome2').css('display', 'initial')
          setTimeout(() => {
                $('#1minModal').modal('hide')
            }, 3500);
        },
        error: (textStatus, errorThrown) => {                  
            $('#emailForm2').css('display', 'none')
            $('#returnHome2').css('display', 'initial')
            setTimeout(() => {
                $('#1minModal').modal('hide')
            }, 3500);
        }
      })
  
    })

    $('#emailForm3').submit(function(e){
      e.preventDefault()
      let $inputs = $('#emailForm3 :input' )
      let values  = {}
      values.message = {}
      values.to = 'jack@tryvitris.com'
      values.subject = '100% Off Request'
      $inputs.each(function () {
        values.message[this.name] = $(this).val()
      })

      $.ajax({
        url: "https://mailer.tryvitris.com/sendMail",
        method: "POST",
        data: values,
        dataType: "json",
        success:  (data) => {
          $('#emailForm3').css('display', 'none')
          $('#returnHome3').css('display', 'initial')
          setTimeout(() => {
              $('#2minModal').modal('hide')
          }, 3500);
        },
        error: (textStatus, errorThrown) => {
            $('#emailForm3').css('display', 'none')
            $('#returnHome3').css('display', 'initial')
            setTimeout(() => {
                $('#2minModal').modal('hide')
            }, 3500);
        }
      })
  
    })
})