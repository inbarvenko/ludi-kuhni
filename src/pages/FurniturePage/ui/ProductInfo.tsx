import { Shield, Palette, Package, Ruler } from "lucide-react";

interface ProductInfoProps {
  name: string;
  description: string;
  characteristics: {
    material: string;
    color: string;
    warranty: string;
    dimensions: string;
    manufacturer: string;
    // style: string;
    installation: string;
  };

  modalOpen: () => void;
}

export function ProductInfo({
  name,
  description,
  characteristics,
  modalOpen,
}: ProductInfoProps) {
  return (
    <div className="flex flex-col gap-8">
      {/* Breadcrumb */}
      <div className="font-['Montserrat'] text-[#6c6c6c] text-sm">
        Главная / Кухни / {name}
      </div>

      {/* Description */}
      <div className="flex flex-col gap-3">
        <h3 className="font-['Montserrat'] text-[#0f0449] text-lg">Описание</h3>
        <p className="font-['Montserrat'] text-[#6c6c6c] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          className="bg-[#79bf3a] w-full text-white px-8 py-3 rounded-lg font-['Montserrat'] hover:bg-[#6ba632] hover:cursor-pointer transition-colors"
          style={{ fontSize: "14px" }}
          onClick={modalOpen}
        >
          Заказать кухню
        </button>

        {/* <button
          className="border border-[#79bf3a] text-[#79bf3a] px-8 py-3 rounded-lg font-['Montserrat'] text-lg hover:cursor-pointer hover:bg-[#79bf3a] hover:text-white transition-colors"
          style={{ fontSize: "14px" }}
          onClick={modalOpen}
        >
          Получить консультацию
        </button> */}
      </div>

      {/* Characteristics */}
      <div className="flex flex-col gap-6">
        <h3 className="font-['Montserrat'] text-[#0f0449] text-lg">
          Характеристики
        </h3>

        <div className="grid gap-4">
          {/* Material */}
          <div className="flex items-start gap-3 p-4 bg-[#f9f9f9] rounded-lg">
            <Package className="size-5 text-[#79bf3a] mt-0.5" />
            <div className="flex-1">
              <div className="font-['Montserrat'] text-[#0f0449] text-sm mb-1">
                Материал
              </div>
              <div className="font-['Montserrat'] text-[#6c6c6c] text-sm">
                {characteristics.material}
              </div>
            </div>
          </div>

          {/* Color */}
          <div className="flex items-start gap-3 p-4 bg-[#f9f9f9] rounded-lg">
            <Palette className="size-5 text-[#79bf3a] mt-0.5" />
            <div className="flex-1">
              <div className="font-['Montserrat'] text-[#0f0449] text-sm mb-1">
                Цвет
              </div>
              <div className="font-['Montserrat'] text-[#6c6c6c] text-sm">
                {characteristics.color}
              </div>
            </div>
          </div>

          {/* Warranty */}
          <div className="flex items-start gap-3 p-4 bg-[#f9f9f9] rounded-lg">
            <Shield className="size-5 text-[#79bf3a] mt-0.5" />
            <div className="flex-1">
              <div className="font-['Montserrat'] text-[#0f0449] text-sm mb-1">
                Гарантия
              </div>
              <div className="font-['Montserrat'] text-[#6c6c6c] text-sm">
                {characteristics.warranty}
              </div>
            </div>
          </div>

          {/* Dimensions */}
          <div className="flex items-start gap-3 p-4 bg-[#f9f9f9] rounded-lg">
            <Ruler className="size-5 text-[#79bf3a] mt-0.5" />
            <div className="flex-1">
              <div className="font-['Montserrat'] text-[#0f0449] text-sm mb-1">
                Размеры
              </div>
              <div className="font-['Montserrat'] text-[#6c6c6c] text-sm">
                {characteristics.dimensions}
              </div>
            </div>
          </div>

          {/* Additional characteristics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex justify-between py-2 border-b border-[#e9e9e9]">
              <span className="font-['Montserrat'] text-[#0f0449] text-sm">
                Производитель
              </span>
              <span className="font-['Montserrat'] text-[#6c6c6c] text-sm">
                {characteristics.manufacturer}
              </span>
            </div>
            {/* <div className="flex justify-between py-2 border-b border-[#e9e9e9]">
              <span className="font-['Montserrat'] text-[#0f0449] text-sm">
                Стиль
              </span>
              <span className="font-['Montserrat'] text-[#6c6c6c] text-sm">
                {characteristics.style}
              </span>
            </div> */}
            <div className="flex justify-between py-2 border-b border-[#e9e9e9]">
              <span className="font-['Montserrat'] text-[#0f0449] text-sm">
                Монтаж
              </span>
              <span className="font-['Montserrat'] text-[#6c6c6c] text-sm">
                {characteristics.installation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
