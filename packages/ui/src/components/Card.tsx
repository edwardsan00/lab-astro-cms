import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
