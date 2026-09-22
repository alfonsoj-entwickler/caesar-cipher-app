"use client";

import { useState, createContext, ChangeEvent, useEffect } from "react";
import { toast } from "react-toastify";
import { encription, decryption, MAX_ROTATION, MAX_TEXT } from "@/helpers";

export const CeaserContext = createContext({});

export default function CeaserProvider({ children }: any) {
  const [textArea, setTextArea] = useState<string>("");
  const [rotation, setRotation] = useState<number>(3);
  const [plaintext, setPlaintext] = useState<string>("");
  const [ciphertext, setCiphertext] = useState<string>("");

  useEffect( ()=> {
    handleUpdateTextAreas()
  }, [rotation])

  const handlePlusRotation = () => {
    setRotation(rotation + 1 > MAX_ROTATION ? rotation : rotation + 1);
  };

  const handleMinusRotation = () => {
    setRotation(rotation - 1 < 0 ? rotation : rotation - 1);
  };

  const handleUpdateTextAreas = () => {
    switch (textArea) {
      case "encryption":
        handleEncryption(plaintext);
        break;
      case "dencryption":
        handleDecryption(ciphertext);
        break;
      default:
        break;
    }
  };

  const handleEncryption = (e: ChangeEvent<HTMLTextAreaElement> | string) => {
    setTextArea("encryption");
    const getText = typeof e === "object" ? e.target.value : e;

    const cipherArray = Array.from(getText).map((character) =>
      encription(character, rotation)
    );
    setCiphertext(cipherArray.join(""));
    setPlaintext(getText);
  };

  const handleDecryption = (e: ChangeEvent<HTMLTextAreaElement> | string) => {
    setTextArea("dencryption");
    const getText = typeof e === "object" ? e.target.value : e;

    const plaintArray = Array.from(getText).map((character) =>
      decryption(character, rotation)
    );
    setCiphertext(getText);
    setPlaintext(plaintArray.join(""));
  };

  const handleDeleteTextArea = () => {
    setPlaintext("");
    setCiphertext("");
    setTextArea("");
  };

  const [announcement, setAnnouncement] = useState<string>("");

  const handleCopyCipherText = () => {
    if (!ciphertext) {
      toast.info("No ciphertext to copy");
      return;
    }
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(ciphertext)
        .then(() => {
          toast.success("Ciphertext has been copied!");
          setAnnouncement("Ciphertext successfully copied to clipboard");
        })
        .catch(() => {
          toast.error("Failed to copy ciphertext");
        });
    }
  };

  const handlePasteCipherText = () => {
    if (navigator?.clipboard?.readText) {
      navigator.clipboard
        .readText()
        .then((cliptext) => {
          if (!cliptext) return;
          const cleanText = cliptext.slice(0, MAX_TEXT);
          handleEncryption(cleanText);
          setAnnouncement("Text pasted into plaintext input");
        })
        .catch(() => {
          toast.error("Unable to read from clipboard. Please paste manually.");
        });
    }
  };

  const handleCopyPlainText = () => {
    if (!plaintext) {
      toast.info("No plaintext to copy");
      return;
    }
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(plaintext)
        .then(() => {
          toast.success("The plain text has been copied!");
          setAnnouncement("Plaintext successfully copied to clipboard");
        })
        .catch(() => {
          toast.error("Failed to copy plaintext");
        });
    }
  };

  const handlePastePlainText = () => {
    if (navigator?.clipboard?.readText) {
      navigator.clipboard
        .readText()
        .then((cliptext) => {
          if (!cliptext) return;
          const cleanText = cliptext.slice(0, MAX_TEXT);
          handleDecryption(cleanText);
          setAnnouncement("Text pasted into ciphertext input");
        })
        .catch(() => {
          toast.error("Unable to read from clipboard. Please paste manually.");
        });
    }
  };

  return (
    <CeaserContext.Provider
      value={{
        rotation,
        plaintext,
        ciphertext,
        handlePlusRotation,
        handleMinusRotation,
        handleEncryption,
        handleDecryption,
        handleDeleteTextArea,
        handleCopyCipherText,
        handleCopyPlainText,
        handlePasteCipherText,
        handlePastePlainText,
      }}
    >
      <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>
      {children}
    </CeaserContext.Provider>
  );
}
