import { SolelunaLogoIcon } from "@/components/SolelunaLogoIcon";

export function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center my-3 max-w-5xl mx-auto px-6 select-none" aria-hidden="true">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#e2d0bf] to-transparent" />
      <div className="absolute flex items-center justify-center px-4 bg-[#faf8f5]">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#9c7545] to-[#d8b88d] flex items-center justify-center text-white shadow-2xs border border-[#ebd8c5]">
          <SolelunaLogoIcon className="w-3 h-3 text-white" />
        </div>
      </div>
    </div>
  );
}
