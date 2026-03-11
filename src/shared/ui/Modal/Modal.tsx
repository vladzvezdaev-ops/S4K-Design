"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !mounted) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => {
        if (dialog.open) dialog.close();
        document.body.style.overflow = "unset";
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen, mounted]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === dialogRef.current) onClose();
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      className={`${styles.modal} ${!isOpen ? styles.isClosing : ""}`}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={handleBackdropClick}
    >
      <div className={styles.content}>{children}</div>
    </dialog>,
    document.body,
  );
};
