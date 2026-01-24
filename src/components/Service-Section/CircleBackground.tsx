import React from "react";

interface CircleBackgroundProps {
  children: React.ReactNode;
  bg?: string;
  secondary?: boolean;
}

export function CircleBackground({ children, bg, secondary }: CircleBackgroundProps) {
  return (
    <div
      style={{
        background: secondary ? "#fff" : (bg || "linear-gradient(180deg, #232a34 0%, #4e54c8 100%)"),
        boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
        borderRadius: "50%",
        width: 90,
        height: 90,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 16px auto",
        border: secondary ? "0.5px solid #DBE0EF" : undefined, 
      }}
    >
      {children}
    </div>
  );
}