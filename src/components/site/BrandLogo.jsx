import { BUSINESS } from "@/lib/siteData";

export default function BrandLogo({ className = "" }) {
    return (
        <span className={`block shrink-0 overflow-hidden rounded-md bg-white ${className}`}>
            <img
                src={BUSINESS.logo}
                alt={BUSINESS.name}
                className="h-full w-full object-contain"
            />
        </span>
    );
}