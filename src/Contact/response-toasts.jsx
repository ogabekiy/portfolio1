import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const successToast = () => {
    toast.success("Xabaringiz muvaffaqiyatli yuborildi", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded shadow-md",
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

const errorToast = () => {
    toast.error("Xabarni yuborishda xatolik yuz berdi", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export {
    successToast,
    errorToast
};

