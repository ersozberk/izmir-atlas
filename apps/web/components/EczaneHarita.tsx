"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

type Eczane = {
  id: number;
  adi: string;
  telefon: string;
  adres: string;
  ilce: string;
  lat: number;
  lng: number;
};

export default function EczaneHarita({ eczaneler }: { eczaneler: Eczane[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const gecerliEczaneler = eczaneler.filter(
    (e) => e.lat && e.lng && !isNaN(e.lat) && !isNaN(e.lng)
  );

  const varsayilanIkon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const izmirMerkez: [number, number] = [38.4237, 27.1428];

  return (
    <div className="w-full h-full min-h-[600px] rounded-xl overflow-hidden border-4 border-slate-100 shadow-xl relative z-0">
      <MapContainer
        center={izmirMerkez}
        zoom={11}
        style={{ height: "600px", width: "100%" }}
        scrollWheelZoom={false}
      >
        {/* AYDINLIK VE RENKLİ STANDART HARİTA */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {gecerliEczaneler.map((eczane) => {
          // HAYAT KURTARAN DOKUNUŞ: Belediyenin ters gönderdiği X ve Y değerlerini 
          // haritaya basarken yer değiştiriyoruz (Kızıldeniz'den İzmir'e taşıma işlemi).
          const gercekEnlem = eczane.lng; // 38 ile başlayan gerçek değer
          const gercekBoylam = eczane.lat; // 27 ile başlayan gerçek değer

          return (
            <Marker
              key={eczane.id}
              position={[gercekEnlem, gercekBoylam]}
              icon={varsayilanIkon}
            >
              <Popup>
                <div className="font-sans p-1 min-w-[200px]">
                  <h3 className="font-bold text-lg border-b pb-1 mb-2 text-blue-600">
                    {eczane.adi}
                  </h3>
                  <p className="text-sm mb-1 text-slate-700">
                    <strong>İlçe:</strong> {eczane.ilce}
                  </p>
                  <p className="text-sm mb-3 text-slate-700 leading-tight">
                    {eczane.adres}
                  </p>
                  <a
                    href={`tel:${eczane.telefon}`}
                    className="bg-blue-600 text-white text-center block py-2 rounded-md hover:bg-blue-700 transition font-medium shadow-md"
                  >
                    📞 Telefonla Ara
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${gercekEnlem},${gercekBoylam}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 text-white text-center block py-2 mt-2 rounded-md hover:bg-emerald-600 transition font-medium shadow-md"
                  >
                    🗺️ Yol Tarifi Al
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}