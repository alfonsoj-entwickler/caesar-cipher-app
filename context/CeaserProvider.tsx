"use client";

import { useState, createContext, ChangeEvent } from "react";
import { toast } from "react-toastify";
import { encription, decryption, MAX_ROTATION, MAX_TEXT } from "@/helpers";

export const CeaserContext = createContext({});

export default function CeaserProvider({ children }: any) {
  const [textArea, setTextArea] = useState<string>("");
  const [rotation, setRotation] = useState<number>(3);
  const [plaintext, setPlaintext] = useState<string>("");
  const [ciphertext, setCiphertext] = useState<string>("");

  const handlePlusRotation = () => {
    setRotation(rotation + 1 > MAX_ROTATION ? rotation : rotation + 1);
    handleUpdateTextAreas();
  };

  const handleMinusRotation = () => {
    setRotation(rotation - 1 < 0 ? rotation : rotation - 1);
    handleUpdateTextAreas();
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

  const handleCopyCipherText = () => {
    navigator.clipboard.writeText(ciphertext);
    toast.success("Ciphertext has been copied!");
  };

  const handlePasteCipherText = () => {
    navigator.clipboard.readText().then(
      (cliptext) => {
        //console.log(cliptext)
        if (cliptext.length !== 0 && cliptext.length < MAX_TEXT) {
          handleEncryption(cliptext);
        } else {
          handleEncryption(cliptext.substring(0, MAX_TEXT));
        }
      },
      (error) => console.log(error)
    );
  };

  const handleCopyPlainText = () => {
    navigator.clipboard.writeText(plaintext);
    toast.success("The plain text has been copied!");
  };

  const handlePastePlainText = () => {
    navigator.clipboard.readText().then(
      (cliptext) => {
        //console.log(cliptext)
        if (cliptext.length !== 0 && cliptext.length < MAX_TEXT) {
          handleDecryption(cliptext);
        } else {
          handleDecryption(cliptext.substring(0, MAX_TEXT));
        }
      },
      (error) => console.log(error)
    );
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
      {children}
    </CeaserContext.Provider>
  );
}
