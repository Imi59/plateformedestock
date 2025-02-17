
import { MessageCircle, Send } from "lucide-react";
import { FaSnapchatGhost } from "react-icons/fa";

export const SocialButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="https://wa.me/YOUR_PHONE_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 hover:-translate-y-1"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="https://t.me/YOUR_TELEGRAM"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0088cc] hover:bg-[#0077b5] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 hover:-translate-y-1"
      >
        <Send className="w-6 h-6" />
      </a>
      <a
        href="https://snapchat.com/add/YOUR_SNAPCHAT"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FFFC00] hover:bg-[#F7E800] text-black p-4 rounded-full shadow-lg transition-all hover:scale-110 hover:-translate-y-1"
      >
        <FaSnapchatGhost className="w-6 h-6" />
      </a>
    </div>
  );
};
