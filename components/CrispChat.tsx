"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    // Tu Website ID ya configurado
    Crisp.configure("55eac1a8-faa6-43cf-a3e3-fefa927e1f4e"); 

    // Ocultar el botón por defecto de Crisp para usar el nuestro de WhatsApp
    Crisp.chat.hide();
  }, []);

  return null;
};
