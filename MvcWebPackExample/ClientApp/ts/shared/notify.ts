import swal from 'sweetalert2/dist/sweetalert2';

function _notify(
  title: string,
  text: string,
  icon: 'info' | 'error' | 'warning'
) {
  swal.fire({
    title,
    text,
    icon,
    confirmButtonText: 'Coolio',
  });
}

function info(title: string, text: string) {
  _notify(title, text, 'info');
}

function error(title: string, text: string) {
  _notify(title, text, 'error');
}

function warning(title: string, text: string) {
  _notify(title, text, 'warning');
}

export const notify = {
  info,
  error,
  warning,
};
