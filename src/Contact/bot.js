// import dotenv from 'dotenv'
// dotenv.config()
import {errorToast, successToast} from './response-toasts'

export async function sendMessageToAdmin(name, message) {
    // const [bot_token,setBotToken] = useState(import.meta.env.VITE_BOT_TOKEN)
    // const [admin,setAdmin] = useState(import.meta.env.VITE_ADMIN_ID)

    const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN || process?.env.VITE_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_ADMIN_ID || process?.env.VITE_ADMIN_ID;
    const text = `Ism: ${name}\nXabar: ${message}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      });
  
      if (!response.ok) {
        errorToast()
        throw new Error("Telegramga yuborishda xatolik yuz berdi.");
      }
      successToast()
      return "Xabar muvaffaqiyatli yuborildi.";
    } catch (error) {
      console.error("Xato:", error);
      throw error;
    }
  }
  