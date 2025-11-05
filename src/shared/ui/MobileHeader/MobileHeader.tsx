import { X } from "lucide-react";
import type React from "react";
import type { RoomsHomeType } from "../../../features/RoomBlock/types";
import { useNavigate } from "react-router-dom";

type Props = {
  isOpen: boolean;
  rooms: RoomsHomeType[];
  onClose: () => void;
  //   onOpen: () => void;
};

const MobileHeader: React.FC<Props> = ({ isOpen, onClose, rooms }: Props) => {
  const navigate = useNavigate();

  const onCatalogueClick = (id: number) => {
    navigate("/catalog?room=" + id);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed bg-[#0f0449] opacity-60 inset-0 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#f9f9f9] shadow-xl transform transition-transform duration-300 z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e9e9e9]">
          <div className="font-['Montserrat'] text-[#0f0449] text-lg">Меню</div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#e9e9e9] rounded-lg transition-colors"
          >
            <X className="cursor-pointer size-6 text-[#0f0449]" />
          </button>
        </div>

        {/* Menu items */}
        <div className="p-6">
          <div className="flex flex-col gap-4">
            {rooms.map((room) => (
              <a
                key={room.id}
                className="cursor-pointer font-['Montserrat'] text-[#0f0449] text-[16px] py-3 px-4 hover:bg-[#e9e9e9] rounded-lg transition-colors"
                onClick={() => onCatalogueClick(room.id || 1)}
              >
                {room.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
