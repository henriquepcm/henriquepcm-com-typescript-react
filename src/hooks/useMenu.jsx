import { useState, useEffect, useRef } from "react";

useState;

export function useMenu() {
     const [menuIsOpen, setMenuIsOpen] = useState(false);
     const menuRef = useRef();
     const focusableElements = useRef([]);
     const currentIndex = useRef(0);

     function toggleMenu() {
          setMenuIsOpen(!menuIsOpen);
     }

     function closeMenu() {
          setMenuIsOpen(false);
     }

     useEffect(() => {
          function handleClickOutside(e) {
               if (!menuRef.current.contains(e.target)) {
                    setMenuIsOpen(false);
               }
          }

          document.addEventListener("mousedown", handleClickOutside);

          return () => {
               document.removeEventListener("mousedown", handleClickOutside);
          };
     }, [menuRef]);

     useEffect(() => {
          const elements = document.querySelectorAll("a, button");
          focusableElements.current = Array.from(elements);
          focusableElements.current[currentIndex.current].focus();

          function handleArrowKeys(e) {
               if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    const direction = e.key === "ArrowRight" ? 1 : -1;
                    const nextIndex =
                         (currentIndex.current +
                              direction +
                              focusableElements.current.length) %
                         focusableElements.current.length;
                    focusableElements.current[nextIndex].focus();
                    currentIndex.current = nextIndex;
               }
          }

          document.addEventListener("keydown", handleArrowKeys);

          return () => {
               document.addEventListener("keydown", handleArrowKeys);
          };
     }, []);

     useEffect(() => {
          function handleKeyDown(e) {
               switch (e.key) {
                    case "Tab":
                         setMenuIsOpen(true);
                         break;
                    case "Escape":
                         setMenuIsOpen(false);
                         break;
               }
          }

          document.addEventListener("keydown", handleKeyDown);

          return () => {
               document.removeEventListener("keydown", handleKeyDown);
          };
     }, []);

     useEffect(() => {
          if (menuIsOpen) {
               document.body.classList.add("overflow-hidden");
          } else {
               document.body.classList.remove("overflow-hidden");
          }
          return () => {
               document.body.classList.remove("overflow-hidden");
          };
     }, [menuIsOpen]);

     return { menuIsOpen, toggleMenu, closeMenu, menuRef };
}
