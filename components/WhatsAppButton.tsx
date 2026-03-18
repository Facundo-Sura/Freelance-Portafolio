"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, CheckCheck } from "lucide-react";
import { Crisp } from "crisp-sdk-web";
import { cn } from "@/lib/utils";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-6 h-6", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.815 11.815 0 001.591 5.976L0 24l6.102-1.6a11.806 11.806 0 005.945 1.595h.005c6.637 0 12.048-5.412 12.051-12.049a11.815 11.815 0 00-3.415-8.514z" />
  </svg>
);

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  time: string;
}

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! 👋 Soy tu asistente de contacto. Pregúntame lo que necesites.",
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    // Escuchar mensajes entrantes desde Crisp
    const onMessageReceived = (message: any) => {
      // Si el mensaje viene del "operador" (el usuario que responde desde Crisp)
      if (message.from === "operator") {
        const botMsg: Message = {
          id: Date.now().toString(),
          text: message.content,
          sender: "bot",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, botMsg]);
      }
    };

    // Crisp API para escuchar mensajes
    // Nota: Esto asume que el SDK de Crisp ya está inicializado en CrispChat.tsx
    try {
      Crisp.message.onMessageReceived(onMessageReceived);
    } catch (e) {
      console.warn("Crisp no está listo aún");
    }

    return () => {
      // Cleanup si es necesario (Crisp no tiene un .off oficial fácil, pero el SDK maneja su ciclo de vida)
    };
  }, []);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    
    // ENVIAR EL MENSAJE REAL A CRISP
    try {
      Crisp.message.sendText(inputText);
    } catch (e) {
      console.error("Error enviando mensaje a Crisp", e);
    }

    setInputText("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[360px] max-w-[90vw] bg-[#1f1f1f] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[520px]"
          >
            {/* Header */}
            <div className="bg-[#25d366] p-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Tu Nombre</h4>
                  <p className="text-[10px] opacity-90 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Chat de WhatsApp
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-black/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat space-y-4">
              <div className="text-center py-2">
                <span className="bg-black/30 text-white/50 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                  Hoy
                </span>
              </div>
              
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "max-w-[85%] p-3 rounded-lg text-sm shadow-sm relative flex flex-col gap-1",
                    msg.sender === "bot"
                      ? "bg-[#262d31] text-white self-start rounded-tl-none"
                      : "bg-[#056162] text-white self-end rounded-tr-none"
                  )}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-[9px] text-gray-300">
                      {msg.time}
                    </span>
                    {msg.sender === "user" && (
                      <CheckCheck size={12} className="text-blue-400" />
                    )}
                  </div>
                </div>
              ))}
              
              <div ref={chatEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-[#2a2f32] flex gap-2 items-center shrink-0">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Escribe un mensaje..."
                className="flex-1 bg-[#33383b] border-none text-white text-sm rounded-full px-4 py-2.5 focus:ring-1 focus:ring-[#25d366] outline-none"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="p-2.5 bg-[#25d366] text-white rounded-full hover:bg-[#20bd5c] transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border-2 border-white/10 relative",
          isOpen ? "bg-[#1f1f1f] text-red-500" : "bg-[#25d366] text-white"
        )}
      >
        {isOpen ? (
          <X size={32} />
        ) : (
          <WhatsAppIcon />
        )}
      </motion.button>
    </div>
  );
}
