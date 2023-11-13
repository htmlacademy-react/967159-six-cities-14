import { useEffect, useRef } from 'react';

import { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { TOfferPreview } from '../../types/offer-preview';
import { TLocation } from '../../types/location';

import { useMap } from '../../hooks';

type TIconConfig = {
  url: string;
  width: number;
  height: number;
  anchorX: number;
  anchorY: number;
};

type TMapProps = {
  block: string;
  location: TLocation;
  offers: TOfferPreview[];
  specialOfferId?: string | null;
}

const defaultIconConfig: TIconConfig = {
  url: '/img/pin.svg',
  width: 28,
  height: 40,
  anchorX: 14,
  anchorY: 40,
};

const activeIconConfig: TIconConfig = {
  url: '/img/pin-active.svg',
  width: 28,
  height: 40,
  anchorX: 14,
  anchorY: 40,
};

function createIcon(config: TIconConfig) {
  return new Icon({
    iconUrl: config.url,
    iconSize: [config.width, config.height],
    iconAnchor: [config.anchorX, config.anchorY]
  });
}

export function Map ({ block, location, offers, specialOfferId }: TMapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(
          offer.id === specialOfferId
            ? createIcon(activeIconConfig)
            : createIcon(defaultIconConfig)
        )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, specialOfferId]);

  return (
    <section
      className={`${block}__map map`}
      ref={mapRef}
      style={{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1144px',
        margin: '0 auto',
        marginBottom: (block === 'offer') ? '50px' : '0',
      }}
    />
  );
}
