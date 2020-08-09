import Swal from 'sweetalert2';

export const errorHandler = (err: string) => {
  Swal.fire({
    title: 'Error!',
    text: err,
    icon: 'error',
    confirmButtonText: 'Ok'
  });
};
