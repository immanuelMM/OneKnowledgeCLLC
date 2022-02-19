// $(document).ready(function(){

//     function showModal(){
//         $('#modal-container').show();
//         $('html body').css('overflow','hidden');
//     }

//     function closeModal(){
//         $('#modal-container').hide();
//     }

//     setTimeout(showModal,30000);

//     $('#close').click(function(){
//         closeModal();
//     })
// })

function sendEmail(){
  Swal.fire({ 
    title: "Sending .. . ",
    showConfirmButton: false,
    onBeforeOpen: () => {
              Swal.showLoading()
              },
  });
  const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
        Email.send({
        Host : "smtp.gmail.com",
        Username : "mawe.merino@gmail.com",
        Password : "ncikvxpedlryvdlx",
        To : "info@oneknowledgeconsulting.com",
        From : document.getElementById("email").value,
        Subject : "New Contact form Enguiry",
        Body : "Name: " 
                              + document.getElementById("name").value 
            +  "<br> Email: " + document.getElementById("email").value
            +  "<br> Subject: " + document.getElementById("subject").value
            +  "<br> Message: " + document.getElementById("message").value,
           
        }).then(
          message =>  
        

          Toast.fire({
            icon: 'success',
            title: 'Message successfully Sent'
          })
            
        );
    }
